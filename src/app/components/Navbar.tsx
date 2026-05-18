import { Car, Bell, CloudSun, Moon, Sun, User } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.nav
      className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-gray-200/50 dark:border-slate-700/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo and branding */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
              <Car className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
                NEXUS AI
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Smart Vehicle System
              </p>
            </div>
          </div>

          {/* Center: Vehicle model (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Tesla Model S
            </span>
          </div>
          

          {/* Right: Status icons and controls */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* AI Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
                AI Active
              </span>
            </div>

            {/* Weather */}
            <div className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <CloudSun className="w-4 h-4" />
              <span className="text-sm">72°F</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Time */}
            <div className="hidden lg:block text-sm text-slate-600 dark:text-slate-400">
              {currentTime}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
              <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="hidden lg:block text-sm text-slate-700 dark:text-slate-300">
                Driver
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
