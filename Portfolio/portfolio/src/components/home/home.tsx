"use client"
import LeftPanel from "@/components/leftPanel";
import RightPanel from "@/components/rightPanel";
import { useTheme } from "@/context/ThemeProvider.Context";




export default function HomePage() {
  const { isDarkMode } = useTheme(); // ✅ get theme state

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Mobile view: stacked - full height minus header */}
      <div className="block md:hidden h-screen">
        <div
          className={`h-1/2 pt-20 overflow-hidden ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <div className="p-4 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>
        <div
          className={`h-1/2 overflow-hidden ${
            isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
          }`}
        >
          <div className="p-4 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Desktop view: overlapping clipped panels */}
      <div className="hidden md:block h-screen pt-20 relative w-full overflow-hidden">
        {/* Left Panel */}
        <div
          className={`absolute inset-0 z-10 clip-left overflow-hidden ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <div className="p-6 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>

        {/* Right Panel */}
        <div
          className={`absolute inset-0 z-20 clip-right overflow-hidden ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="p-6 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}