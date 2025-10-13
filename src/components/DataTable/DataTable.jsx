import React, { useMemo, useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  MdArrowDownward,
  MdArrowUpward,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdSearch,
} from "react-icons/md";
import { RiFilter2Fill, RiFilter2Line } from "react-icons/ri";

// Utility to generate pagination range
const getPaginationRange = (currentPage, pageCount, maxPages = 3) => {
  const delta = Math.floor(maxPages / 2);
  let start = Math.max(0, currentPage - delta);
  let end = Math.min(pageCount - 1, start + maxPages - 1);
  if (end - start + 1 < maxPages) {
    start = Math.max(0, end - maxPages + 1);
  }
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  if (start > 0) range.unshift("...");
  if (end < pageCount - 1) range.push("...");
  return range;
};

const DataTable = ({
  data = [],
  columns = [],
  page,
  setPage,
  size,
  setSize,
  onRowClick,
  loading = false,
}) => {
  const [searchTerms, setSearchTerms] = useState({});
  const [filterSearchTerms, setFilterSearchTerms] = useState({}); // Per-column dropdown search: { [columnId]: string }
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filterOpen, setFilterOpen] = useState({}); // { [columnId]: boolean }
  const [filterSelections, setFilterSelections] = useState({}); // { [columnId]: Set<string> }

  // Debounced filter search update (optional for performance)
  useEffect(() => {
    const timeouts = {};
    Object.keys(filterSearchTerms).forEach((columnId) => {
      clearTimeout(timeouts[columnId]);
      timeouts[columnId] = setTimeout(() => {
        // Any additional logic here if needed (e.g., API fetch for dynamic uniques)
      }, 300);
    });
    return () => Object.values(timeouts).forEach(clearTimeout);
  }, [filterSearchTerms]);

  const handleFilterChange = (columnId, value) => {
    setFilterSearchTerms((prev) => ({
      ...prev,
      [columnId]: value.toLowerCase(),
    }));
  };

  const handleSearchChange = (columnId, value) => {
    setSearchTerms((prev) => ({
      ...prev,
      [columnId]: value.toLowerCase(),
    }));
  };

  // Compute data filtered only by searches (no checkbox filters)
  const searchFilteredData = useMemo(() => {
    if (!Array.isArray(data) || !columns.length) return [];
    return data.filter((row) =>
      columns.every((col) =>
        col.isSearchable && searchTerms[col.accessorKey]
          ? String(row[col.accessorKey] || "")
              .toLowerCase()
              .includes(searchTerms[col.accessorKey])
          : true
      )
    );
  }, [data, columns, searchTerms]);

  // Compute dynamic unique values per column, based on searchFilteredData + all filters EXCEPT the current column's
  const uniqueValues = useMemo(() => {
    const uniques = {};
    columns.forEach((col) => {
      if (col.isFilterable === false) return;
      const colId = col.accessorKey;
      // Partial filter: apply all checkbox filters except this column's
      const partialFiltered = searchFilteredData.filter((row) =>
        Object.entries(filterSelections).every(([otherColId, selected]) => {
          if (otherColId === colId || selected.size === 0) return true;
          const colValue = String(row[otherColId] || "");
          return selected.has(colValue);
        })
      );
      const values = [
        ...new Set(partialFiltered.map((row) => String(row[colId] || ""))),
      ];
      uniques[colId] = values.filter((v) => v.trim()).sort(); // Sort alphabetically for better UX
    });
    return uniques;
  }, [searchFilteredData, filterSelections, columns]);

  // Filter toggle handler
  const handleFilterToggle = (columnId) => {
    setFilterOpen((prev) => ({ ...prev, [columnId]: !prev[columnId] }));
    // Clear per-column search when closing (optional)
    if (filterOpen[columnId]) {
      setFilterSearchTerms((prev) => {
        const next = { ...prev };
        delete next[columnId];
        return next;
      });
    }
  };

  // Filter selection handler
  const handleFilterSelect = (columnId, value, checked) => {
    setFilterSelections((prev) => {
      const current = prev[columnId] || new Set();
      const next = new Set(current);
      if (checked) {
        next.add(value);
      } else {
        next.delete(value);
      }
      const newSelections = { ...prev, [columnId]: next };
      // Clean up empty sets
      if (next.size === 0) delete newSelections[columnId];
      return newSelections;
    });
  };

  // Select All/None handler (selects all current visible uniques)
  const handleSelectAll = (columnId, selectAll) => {
    const values = uniqueValues[columnId] || [];
    setFilterSelections((prev) => {
      const next = selectAll ? new Set(values) : new Set();
      const newSelections = { ...prev, [columnId]: next };
      if (!selectAll && next.size === 0) delete newSelections[columnId];
      return newSelections;
    });
  };

  // Global clear filters
  const clearAllFilters = () => {
    setFilterSelections({});
    setFilterOpen({});
    setFilterSearchTerms({});
  };

  // Full filtered data: searchFilteredData + ALL checkbox filters
  const filteredData = useMemo(() => {
    return searchFilteredData.filter((row) => {
      return Object.entries(filterSelections).every(([colId, selected]) => {
        if (selected.size === 0) return true; // No filter = pass
        const colValue = String(row[colId] || "");
        return selected.has(colValue);
      });
    });
  }, [searchFilteredData, filterSelections]);

  useEffect(() => {
    // Correct pagination index after filtering
    const pageCount = Math.ceil(filteredData.length / size);
    if (page >= pageCount && pageCount > 0) {
      setPage(pageCount - 1);
    } else if (filteredData.length === 0) {
      setPage(0);
    }
  }, [filteredData, page, size, setPage]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    const column = columns.find((c) => c.accessorKey === sortConfig.key);
    if (!column) return filteredData;
    const getValue = (row) => row[sortConfig.key];
    const directionFactor = sortConfig.direction === "asc" ? 1 : -1;
    const isNumeric = (val) => {
      if (val === null || val === undefined) return false;
      const num = Number(val);
      return !isNaN(num) && isFinite(num);
    };
    const parseDate = (val) => {
      const d = new Date(val);
      return isNaN(d.getTime()) ? null : d.getTime();
    };
    const compare = (a, b) => {
      const va = getValue(a);
      const vb = getValue(b);
      // Custom sort function support per column
      if (typeof column.sortFn === "function") {
        return directionFactor * column.sortFn(va, vb, a, b);
      }
      // Try date comparison first if values look like dates
      const da = parseDate(va);
      const db = parseDate(vb);
      if (da !== null && db !== null) {
        return directionFactor * (da - db);
      }
      // Then numeric
      if (isNumeric(va) && isNumeric(vb)) {
        return directionFactor * (Number(va) - Number(vb));
      }
      // Fallback to string compare
      const sa = (va ?? "").toString().toLowerCase();
      const sb = (vb ?? "").toString().toLowerCase();
      if (sa < sb) return -1 * directionFactor;
      if (sa > sb) return 1 * directionFactor;
      return 0;
    };
    return [...filteredData].sort(compare);
  }, [filteredData, columns, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = page * size;
    const end = start + size;
    return sortedData.slice(start, end);
  }, [sortedData, page, size]);

  const handleSort = (columnId, isSortable = true) => {
    if (!isSortable) return;
    setSortConfig((prev) => {
      if (prev.key === columnId) {
        // Toggle asc <-> desc
        const nextDir = prev.direction === "asc" ? "desc" : "asc";
        return { key: columnId, direction: nextDir };
      }
      return { key: columnId, direction: "asc" };
    });
  };

  const table = useReactTable({
    data: filteredData,
    columns,
    pageCount: Math.ceil(filteredData.length / size),
    state: {
      pagination: { pageIndex: page, pageSize: size },
    },
    // ** ADDED: Column Resizing Options **
    enableColumnResizing: true,
    columnResizeMode: "onChange", // or 'onEnd'
    // *************************************
    manualPagination: true,
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex: page, pageSize: size })
          : updater;
      setPage(newState.pageIndex);
      setSize(newState.pageSize);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const sizeArray = [20, 40, 60, 80, 100];
  const hasSearchableColumns = columns.some((col) => col.isSearchable);
  const paginationRange = getPaginationRange(page, table.getPageCount());

  // Use the table's state.columnSizing to set the table's width based on column sizes
  const tableWidth = table.getCenterTotalSize();

  return (
    <div className="flex flex-col bg-white">
      <div className="overflow-auto min-h-[300px] max-h-[600px]">
        <table style={{ width: tableWidth, minWidth: "100%" }}>
          <thead className="bg-gray-50 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const columnDef = header.column.columnDef;
                  const isSortable = columnDef.enableSorting !== false;
                  const isActive = sortConfig.key === columnDef.accessorKey;
                  const canResize = header.column.getCanResize();
                  const indicator = isActive ? (
                    sortConfig.direction === "asc" ? (
                      <MdArrowUpward className="w-4 h-4" />
                    ) : (
                      <MdArrowDownward className="w-4 h-4" />
                    )
                  ) : (
                    <div className="w-4 h-4 text-gray-400">
                      <MdArrowUpward className="w-4 h-4 invisible group-hover:visible" />
                    </div>
                  );
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      scope="col"
                      className={`relative text-sm font-medium tracking-wide text-gray-500 transition-all duration-300 text-nowrap text-ellipsis ${
                        isSortable ? "cursor-pointer select-none group" : ""
                      }`}
                      onClick={() =>
                        handleSort(columnDef.accessorKey, isSortable)
                      }
                      style={{ width: header.getSize() }}
                    >
                      <div className="border border-gray-300 p-2 flex items-center justify-between">
                        <div className="flex flex-row gap-1 items-center">
                          {header.isPlaceholder ? null : (
                            <span
                              className={`${
                                flexRender(
                                  columnDef.header,
                                  header.getContext()
                                ).toLowerCase() === "actions" ||
                                flexRender(
                                  columnDef.header,
                                  header.getContext()
                                ).toLowerCase() === "status"
                                  ? "mx-auto "
                                  : ""
                              }`}
                            >
                              {flexRender(
                                columnDef.header,
                                header.getContext()
                              )}
                            </span>
                          )}
                          {isSortable && (
                            <span className="flex-shrink-0">{indicator}</span>
                          )}
                        </div>
                        {/* Updated Filter Dropdown with Internal Search */}
                        {columnDef.isFilterable !== false && (
                          <div className="size-6 relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFilterToggle(columnDef.accessorKey);
                              }}
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-100 rounded p-1 cursor-pointer"
                              aria-expanded={filterOpen[columnDef.accessorKey]}
                              role="button"
                            >
                              {filterOpen[columnDef.accessorKey] ? (
                                <RiFilter2Fill className="w-4 h-4 transition-transform" />
                              ) : (
                                <RiFilter2Line className="w-4 h-4 transition-transform" />
                              )}
                            </button>
                            {filterOpen[columnDef.accessorKey] && (
                              <div
                                onBlurCapture={() =>
                                  handleFilterToggle(columnDef.accessorKey)
                                }
                                className="absolute top-[100%] -right-[10px] bg-white h-auto w-fit z-50 border border-gray-300 shadow-lg rounded-md"
                              >
                                <div className="p-2 border-b bg-gray-50 flex justify-between">
                                  <button
                                    onClick={() =>
                                      handleSelectAll(
                                        columnDef.accessorKey,
                                        true
                                      )
                                    }
                                    className="text-xs text-blue-600 hover:underline mr-2"
                                  >
                                    Select All (
                                    {uniqueValues[columnDef.accessorKey]
                                      ?.length || 0}
                                    )
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleSelectAll(
                                        columnDef.accessorKey,
                                        false
                                      )
                                    }
                                    className="text-xs text-gray-600 hover:underline"
                                  >
                                    Clear
                                  </button>
                                </div>
                                <div className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Search in filter..."
                                    value={
                                      filterSearchTerms[
                                        columnDef.accessorKey
                                      ] || ""
                                    }
                                    onChange={(e) =>
                                      handleFilterChange(
                                        columnDef.accessorKey,
                                        e.target.value
                                      )
                                    }
                                    className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                                  />
                                </div>
                                <ul className="p-2 max-h-[180px] overflow-y-auto">
                                  {(() => {
                                    const searchTerm =
                                      filterSearchTerms[
                                        columnDef.accessorKey
                                      ] || "";
                                    const filteredUniques = (
                                      uniqueValues[columnDef.accessorKey] || []
                                    ).filter((value) =>
                                      value.toLowerCase().includes(searchTerm)
                                    );
                                    if (filteredUniques.length === 0) {
                                      return (
                                        <li className="p-2 text-sm text-gray-500 italic text-center">
                                          No matches
                                        </li>
                                      );
                                    }
                                    return filteredUniques.map((value) => {
                                      const isSelected = (
                                        filterSelections[
                                          columnDef.accessorKey
                                        ] || new Set()
                                      ).has(value);
                                      return (
                                        <li
                                          key={value}
                                          className="flex items-center gap-2 p-1 hover:bg-gray-50 rounded cursor-pointer"
                                        >
                                          <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={(e) =>
                                              handleFilterSelect(
                                                columnDef.accessorKey,
                                                value,
                                                e.target.checked
                                              )
                                            }
                                            className="rounded"
                                          />
                                          <label className="text-sm text-left text-gray-700 line-clamp-1 flex-1">
                                            {value}
                                          </label>
                                        </li>
                                      );
                                    });
                                  })()}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {canResize && (
                        <div
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          className={`absolute top-0 -right-[2px] w-2 h-[95%] cursor-col-resize select-none touch-none ${
                            header.column.getIsResizing()
                              ? "bg-gray-200 opacity-100"
                              : "bg-gray-200 opacity-80"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                          }}
                          role="separator"
                          aria-orientation="vertical"
                          aria-valuenow={header.column.getSize()}
                          tabIndex={-1}
                        ></div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
            {hasSearchableColumns && (
              <tr>
                {columns.map((col, index) => (
                  <td
                    key={col.accessorKey || `search-cell-${index}`}
                    style={{
                      width: table
                        .getHeaderGroups()[0]
                        ?.headers[index]?.getSize(),
                    }}
                  >
                    {col.isSearchable ? (
                      <div className="relative bg-gray-200">
                        <input
                          type="text"
                          placeholder={`Search ${
                            col.header || col.accessorKey
                          }`}
                          value={searchTerms[col.accessorKey] || ""}
                          onChange={(e) =>
                            handleSearchChange(col.accessorKey, e.target.value)
                          }
                          className="w-full px-2 py-1 bg-transparent border border-gray-300 text-gray-500 text-sm focus:outline-none focus:ring-0 placeholder-gray-500 placeholder:font-light font-light"
                          aria-label={`Search ${col.header || col.accessorKey}`}
                        />
                        <div className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 pointer-events-none">
                          <MdSearch
                            className="w-4 h-4 bg-gray-200"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="py-1"></div>
                    )}
                  </td>
                ))}
              </tr>
            )}
          </thead>
          <tbody className="bg-white">
            {loading && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-sm font-medium text-gray-500"
                >
                  <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current text-green-500 border-t-transparent rounded-full" />
                </td>
              </tr>
            )}
            {!loading && paginatedData.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-4 text-center text-sm font-medium text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
            {!loading &&
              paginatedData.length > 0 &&
              paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`hover:bg-gray-200 even:bg-gray-100 transition-colors ${
                    onRowClick ? "cursor-pointer" : ""
                  }`}
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {columns.map((col, colIndex) => {
                    return (
                      <td
                        key={col.accessorKey || `cell-${rowIndex}-${colIndex}`}
                        className="px-2 py-1 border border-gray-200 whitespace-nowrap text-sm text-gray-700"
                        style={{
                          width: table
                            .getHeaderGroups()[0]
                            ?.headers[colIndex]?.getSize(),
                        }}
                      >
                        {flexRender(
                          col.cell || (({ getValue }) => getValue()),
                          {
                            getValue: () => row[col.accessorKey],
                            row: { original: row },
                          }
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex lg:flex-row flex-col items-start gap-[10px] lg:items-center justify-between mt-4 p-4 border-t border-gray-300 bg-white">
        <div className="flex lg:flex-row flex-col items-start gap-[10px] lg:items-center space-x-4">
          <select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="rounded-md px-3 py-1 text-sm text-gray-700 bg-white focus:outline-none focus:ring-0 cursor-pointer border border-gray-300"
            aria-label="Select rows per page"
          >
            {sizeArray.map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption} per page
              </option>
            ))}
          </select>
          <button
            onClick={clearAllFilters}
            disabled={Object.keys(filterSelections).length === 0}
            className="text-sm text-gray-600 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear All Filters
          </button>
          <span className="text-sm text-gray-700">
            Showing {page * size + 1} -{" "}
            {Math.min((page + 1) * size, filteredData.length)} of{" "}
            {filteredData.length} items
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setPage(0)}
            disabled={page === 0}
            className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50"
            aria-label="Go to first page"
          >
            <MdKeyboardDoubleArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 md:block hidden"
            aria-label="Go to previous page"
          >
            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          {paginationRange.map((pageNumber, index) =>
            typeof pageNumber === "string" ? (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-1 text-sm text-gray-700"
              >
                ...
              </span>
            ) : (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  page === pageNumber
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-indigo-50"
                }`}
                aria-label={`Go to page ${pageNumber + 1}`}
              >
                {pageNumber + 1}
              </button>
            )
          )}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= table.getPageCount() - 1}
            className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50"
            aria-label="Go to next page"
          >
            <MdKeyboardArrowRight className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => setPage(table.getPageCount() - 1)}
            disabled={page >= table.getPageCount() - 1}
            className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-50 md:block hidden"
            aria-label="Go to last page"
          >
            <MdKeyboardDoubleArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
