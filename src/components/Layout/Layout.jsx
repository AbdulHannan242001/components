import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbChevronDown, TbMenu2, TbX } from "react-icons/tb";
import logo from "../../assets/Logo.svg";

const Layout = ({ children, componentCategories, scrollToComponent }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const sidebarRef = useRef(null);

  const toggleCategory = (category, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setActiveCategory(activeCategory === category ? null : category);
  };

  const handleSidebarScroll = (e) => {
    e.stopPropagation(); // Prevent scroll from reaching main content
    e.preventDefault(); // Prevent default scroll behavior
  };

  const handleComponentClick = (componentName, e) => {
    e.stopPropagation(); // Prevent event bubbling
    scrollToComponent(componentName);
    setSidebarOpen(false);
  };

  const Sidebar = () => (
    <motion.div
      ref={sidebarRef}
      initial={{ x: -350 }}
      animate={{ x: sidebarOpen ? 0 : -350 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 top-0 h-full w-80 bg-neutral-900/95 backdrop-blur-xl border-r border-neutral-800 z-[9999] overflow-y-auto"
      onWheel={handleSidebarScroll}
      onTouchMove={handleSidebarScroll}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-white">
              ICL - Interactive Component Library
            </h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <TbX size={24} />
          </button>
        </div>

        <div className="space-y-2">
          {Object.entries(componentCategories).map(([category, components]) => (
            <div
              key={category}
              className="border border-neutral-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={(e) => toggleCategory(category, e)}
                className="w-full p-4 text-left bg-neutral-800/50 hover:bg-neutral-800 transition-colors flex items-center justify-between text-white"
              >
                <span className="font-medium">{category}</span>
                <motion.div
                  animate={{ rotate: activeCategory === category ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TbChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeCategory === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      {Object.entries(components).map(([name, Component]) => (
                        <button
                          key={name}
                          onClick={(e) => handleComponentClick(name, e)}
                          className="w-full p-3 text-left text-sm text-neutral-300 hover:text-white hover:bg-neutral-700/50 rounded transition-colors"
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative">
      {/* Sidebar */}
      <Sidebar />

      {/* Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-[9999] bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-800">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <h1 className="text-xl font-bold text-white">
                ICL - Interactive Component Library
              </h1>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              <TbMenu2 size={24} />
            </button>
          </div>
        </header>

        {/* Content */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { setSidebarOpen })
        )}
      </main>
    </div>
  );
};

export default Layout;
