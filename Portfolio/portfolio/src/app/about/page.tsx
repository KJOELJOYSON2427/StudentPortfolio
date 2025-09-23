"use client";

import Tabs from "@/components/about/tabs";
import Header from "@/components/common/header";
import Bio from "@/components/about/Bio";
import React from "react";
import { useTheme } from "@/context/ThemeProvider.Context";

function About() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center mt-8 p-6 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-gray-100" // dark mode background & text
          : "bg-radial-gray text-gray-900" // light mode
      }`}
    >
      <Header />
      <Bio />
      <Tabs />
    </div>
  );
}

export default About;
