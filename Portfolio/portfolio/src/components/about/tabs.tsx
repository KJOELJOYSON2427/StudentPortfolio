"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Briefcase, GraduationCap } from "lucide-react"; // nice icons
import { JSX } from "react/jsx-runtime";
import Skills from "./Skills/skills";
import { useTheme } from "@/context/ThemeProvider.Context";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
type TabType = "skills" | "experience" | "education";

const tabData: { key: TabType; label: string; icon: JSX.Element; content: JSX.Element }[] = [
  {
    key: "skills",
    label: "Skills",
    icon: <Sparkles className="w-5 h-5 mr-2" />,
    content: (
      <div className="w-full">
      <Skills />
    </div>
    ),
  },
  {
    key: "experience",
    label: "Experience",
    icon: <Briefcase className="w-5 h-5 mr-2" />,
    content: (
      <Experience/>
    ),
  },
  {
    key: "education",
    label: "Education",
    icon: <GraduationCap className="w-5 h-5 mr-2" />,
    content: (<Education/>),
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("skills");
  const { isDarkMode } = useTheme();
  return (
    <div className="w-full max-w-3xl mx-auto mt-16">
      {/* Glassmorphism container */}
      <div className={`backdrop-blur-lg border   rounded-2xl shadow-xl p-6
         ${isDarkMode ?'bg-gray-800 border-gray-700 text-gray-200':'bg-white/10  border-white/20 text-gray-900'}
        `}>
        
        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 border-b border-white/20 pb-4">
          {tabData.map((tab) => (
            <button
              key={tab.key}
              className={`flex items-center px-6 py-2 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-blue-500/70 to-purple-500/70 text-white shadow-lg scale-105"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content with animation */}
        <div className="mt-6 p-0 sm:p-4 min-h-[400px] sm:min-h-[500px] transition-all duration-300">
          <AnimatePresence mode="wait">
            {tabData.map(
              (tab) =>
                activeTab === tab.key && (
                  <motion.div
                    key={tab.key}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full stroke-black"
                  >
                     <div className="w-full h-full">
              {tab.content}
            </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
