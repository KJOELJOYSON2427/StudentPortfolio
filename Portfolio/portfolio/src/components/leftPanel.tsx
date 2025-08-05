import SocialIcons from "./SocialIcons";

const LeftPanel = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden h-full w-full flex flex-col items-center justify-center px-4 text-center py-12">
    <p className="flex md:hidden text-base text-gray-700 font-bold text-center">
  Hi, I am
</p>

        <h1 className="text-xl font-bold leading-tight">
          K. Joel Joyson
        </h1>
        <p className="text-sm text-[#919191] font-extrabold mt-2">
          Front-end Developer / UI Designer
        </p>
       <SocialIcons/>
        
      </div>

      {/* Desktop View */}
      <div className="hidden ml-32 md:flex h-full w-full flex-col items-start justify-center px-12 py-8 text-left">
       <p className="hidden md:flex text-[40px] leading-[47px] font-raleway font-bold text-gray-700 mb-3">
  Hi, I am
</p>

        <h1 className="pt-10 mt-7 text-6xl font-bold leading-tight text-black mb-2">
          K. Joel Joyson
        </h1>
        <p className="text-md text-[#919191] text-center tracking-tight ml-15 font-extrabold">
          Front-end Developer / UI Designer
        </p>
         <div className="relative ml-10 mt-16 mb-8 pb-3 flex flex-col items-center">
  <SocialIcons />
</div>
      </div>
    </>
  );
};

export default LeftPanel;
