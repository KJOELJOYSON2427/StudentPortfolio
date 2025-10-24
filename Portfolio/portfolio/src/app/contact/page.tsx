"use client";
import Header from "@/components/common/header";
import { ContactForm } from "@/components/contact/contactForm";
import { useTheme } from "@/context/ThemeProvider.Context";

function About() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        className={`w-full min-h-screen flex flex-col items-center mt-8 p-6 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900 text-gray-100" // dark mode background & text
            : "text-gray-900" // light mode text color only (we’ll set bg below)
        }`}
        style={{
          background: isDarkMode ? "" : "#f4c542", // yellow background in light mode
        }}
      >
        <Header />
        <ContactForm />
      </div>
    </>
  );
}

export default About;
