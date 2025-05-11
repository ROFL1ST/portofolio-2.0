import { motion, AnimatePresence } from "framer-motion";
// Pastikan Anda memiliki Heroicons

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import useTheme from "../useTheme";
const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div
      className="flex lg:hidden items-center justify-center dark:text-[#E5E5E5] z-50 cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <SunIcon className="h-10 text-yellow-500" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <MoonIcon className="h-10 text-yellow-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkModeToggle;
