import Tabs from "@/components/about/tabs";
import Header from "@/components/common/header";
import React from "react";


import Bio from "@/components/about/Bio";

function About() {
  return (
     <div className="w-full min-h-screen bg-radial-gray flex flex-col items-center mt-8 p-6">
      <Header />
      <Bio />
      <Tabs />
    </div>
  );
}

export default About;
