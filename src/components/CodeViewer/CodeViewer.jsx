import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbCopy, TbCheck, TbCode, TbEye } from "react-icons/tb";

const CodeViewer = ({ componentName, reactCode, nextjsCode }) => {
  const [activeTab, setActiveTab] = useState("react");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeToCopy = activeTab === "react" ? reactCode : nextjsCode;
    try {
      await navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const formatCode = (code) => {
    return code
      .split('\n')
      .map((line, index) => (
        <div key={index} className="flex">
          <span className="text-neutral-500 text-xs w-8 flex-shrink-0 select-none">
            {index + 1}
          </span>
          <span className="text-neutral-300 font-mono text-sm">
            {line}
          </span>
        </div>
      ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-neutral-800/50 border-b border-neutral-700">
        <div className="flex items-center gap-2">
          <TbCode className="text-blue-400" size={20} />
          <span className="text-white font-medium">{componentName}</span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Tab Toggle */}
          <div className="flex md:flex-row flex-col bg-neutral-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("react")}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeTab === "react"
                  ? "bg-blue-500 text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              React
            </button>
            <button
              onClick={() => setActiveTab("nextjs")}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                activeTab === "nextjs"
                  ? "bg-blue-500 text-white"
                  : "text-neutral-300 hover:text-white"
              }`}
            >
              Next.js
            </button>
          </div>
          
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            title="Copy code"
          >
            {copied ? <TbCheck size={16} className="text-green-400" /> : <TbCopy size={16} />}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="p-4 bg-neutral-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="overflow-x-auto"
          >
            <pre className="font-mono text-sm">
              {formatCode(activeTab === "react" ? reactCode : nextjsCode)}
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CodeViewer;
