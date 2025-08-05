import LeftPanel from "@/components/leftPanel";
import RightPanel from "@/components/rightPanel";
import Header from "./common/header";

export default function HomePage() {
  return (
    <div className="w-full h-screen overflow-hidden">
     
      
      {/* Mobile view: stacked - full height minus header */}
      <div className="block md:hidden h-screen">
        <div className="bg-gray-100 h-1/2 pt-20 overflow-hidden">
          <div className="p-4 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>
        <div className="bg-black text-white h-1/2 overflow-hidden">
          <div className="p-4 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Desktop view: overlapping clipped panels - full height minus header */}
      <div className="hidden md:block h-screen pt-20 relative w-full overflow-hidden">
        {/* Left Panel */}
        <div className="absolute inset-0 z-10 clip-left bg-gray-100 overflow-hidden">
          <div className="p-6 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>

        {/* Right Panel */}
        <div className="absolute inset-0 z-20 clip-right bg-black text-white overflow-hidden">
          <div className="p-6 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative: Using CSS Grid for precise layout
export function HomePageGridLayout() {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-rows-[auto_1fr]">
     
      
      {/* Mobile view: stacked */}
      <div className=" md:hidden grid grid-rows-2 overflow-hidden">
        <div className="bg-gray-100 overflow-hidden">
          <div className="p-4 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>
        <div className="bg-black text-white overflow-hidden">
          <div className="p-4 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Desktop view: overlapping clipped panels */}
      <div className="hidden md:block relative overflow-hidden">
        {/* Left Panel */}
        <div className="absolute inset-0 z-10 clip-left bg-gray-100 overflow-hidden">
          <div className="p-6 h-full flex flex-col justify-center">
            <LeftPanel />
          </div>
        </div>

        {/* Right Panel */}
        <div className="absolute inset-0 z-20 clip-right bg-black text-white overflow-hidden">
          <div className="p-6 h-full flex flex-col justify-center">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}