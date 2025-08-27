import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  //If page is refreshed it will keep the theme you selected
  // Empty dependency at the end so only runs once
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={
        "fixed max-sm:hidden right-5 z-50 p-2 px-6 rounded-full bg-[#999999] flex items-center justify-between gap-2 m-3 transition-colors duration-300 hover:bg-[#D65A43] focus:outline-hidden "
      }
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6  text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6  text-blue-900" />
      )}
    </button>
  );
};
