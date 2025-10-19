"use client";
import Header from "@/components/common/header";
import { useTheme } from "@/context/ThemeProvider.Context";
function About() {
  const { isDarkMode } = useTheme();
   return(
    <>
    <div
      className={`w-full min-h-screen flex flex-col items-center mt-8 p-6 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-gray-100" // dark mode background & text
          : "bg-radial-gray text-gray-900" // light mode
      }`}
    >
        <Header />
    </div>
    </>
   )
}

export default About;