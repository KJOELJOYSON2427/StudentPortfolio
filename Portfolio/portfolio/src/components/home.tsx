import LeftPanel from "@/components/leftPanel";
import RightPanel from "@/components/rightPanel";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-x-hidden">
      <div className="w-full md:w-1/2 bg-gray-100 flex-1">
        <LeftPanel />
      </div>
      <div className="w-full md:w-1/2 bg-black flex-1">
        <RightPanel />
      </div>
    </div>
  );
}

