import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbEye, TbCode } from "react-icons/tb";
import CodeViewer from "../CodeViewer/CodeViewer";

const ComponentWrapper = ({ 
  componentName, 
  Component, 
  index, 
  totalComponents,
  reactCode,
  nextjsCode 
}) => {
  const [viewMode, setViewMode] = useState("preview"); // "preview" or "code"
  
  // Sanitize componentName for valid HTML id (e.g., "Basic Button" -> "basic-button")
  const sanitizedId = componentName.replace(/\s+/g, '-').toLowerCase();

  return (
    <div id={sanitizedId} className="relative">
      {/* Component Header */}
      <div className="sticky top-16 z-[9996] bg-neutral-900/90 backdrop-blur-xl border-b border-neutral-800 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">
            {componentName}
          </h3>
          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex flex-col md:flex-row bg-neutral-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode("preview")}
                className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-medium transition-colors ${
                  viewMode === "preview"
                    ? "bg-blue-500 text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <TbEye size={14} />
                Preview
              </button>
              <button
                onClick={() => setViewMode("code")}
                className={`flex items-center gap-2 px-3 py-1 rounded text-xs font-medium transition-colors ${
                  viewMode === "code"
                    ? "bg-blue-500 text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <TbCode size={14} />
                Code
              </button>
            </div>
            
            {/* Component Counter */}
            <span className="text-sm text-neutral-400">
              {index + 1} of {totalComponents}
            </span>
          </div>
        </div>
      </div>

      {/* Component Content */}
      <AnimatePresence mode="wait">
        {viewMode === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Component />
          </motion.div>
        ) : (
          <motion.div
            key="code"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <CodeViewer
              componentName={componentName}
              reactCode={reactCode}
              nextjsCode={nextjsCode}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComponentWrapper;