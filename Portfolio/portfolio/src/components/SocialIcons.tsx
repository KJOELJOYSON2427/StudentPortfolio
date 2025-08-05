import { socialIconData } from "@/logic/SocialIcons";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 mt-6 justify-center md:justify-start">
      {socialIconData().map((icon, index) => (
        <div key={index} className="group relative flex flex-col items-center">
          <a
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out 
              transform hover:scale-125 
              hover:drop-shadow-lg"
          >
            <div className="w-10 h-10 md:w-14 md:h-14
                bg-gray-200 group-hover:bg-black
                text-gray-800 group-hover:text-white
                border border-gray-300 group-hover:border-black 
                rounded-full flex items-center justify-center
                transition-all duration-300 ease-in-out shadow-md
                hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-black">
              <Image
                src={icon.icon}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain group-hover:invert"
              />
            </div>
          </a>

          {/* Tooltip */}
          <div className="absolute bottom-[-36px] z-10 scale-0 group-hover:scale-100 transition-all duration-300 
              bg-black text-white text-xs font-semibold px-2 py-1 rounded 
              shadow-lg pointer-events-none whitespace-nowrap">
            {icon.alt}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
