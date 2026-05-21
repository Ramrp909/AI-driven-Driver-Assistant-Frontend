import { Car, Bell, CloudSun, Moon, Sun, User } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export default function Navbar({ isDark, onThemeToggle }: NavbarProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-gray-200/50 dark:border-slate-700/50 shadow-[0_4px_20px_rgba(59,130,246,0.06)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.06)]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo and branding */}
          <div className="flex items-center gap-3">
            <motion.div
              className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Car className="w-5 h-5 text-white" strokeWidth={2} />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold tracking-wide text-slate-900 dark:text-white">
                NEXUS AI
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Smart Vehicle System
              </p>
            </div>
          </div>

          {/* Center: Vehicle model (hidden on mobile) */}
          <motion.div
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Tesla Model S
            </span>
          </motion.div>

          {/* Right: Status icons and controls */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* AI Status Badge */}
            <motion.div
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200/50 dark:border-cyan-900/50 rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
                AI Active
              </span>
            </motion.div>

            {/* Weather */}
            <motion.div
              className="hidden lg:flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <CloudSun className="w-4 h-4" />
              <span className="text-sm font-medium">72°F</span>
            </motion.div>

            {/* Notifications Button with Badge */}
            <motion.button
              className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View notifications"
            >
              <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              {notificationCount > 0 && (
                <motion.span
                  className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  aria-label={`${notificationCount} notification${notificationCount > 1 ? 's' : ''}`}
                />
              )}
            </motion.button>

            {/* Time */}
            {currentTime && (
              <motion.div
                className="hidden lg:block text-sm font-medium text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentTime}
              </motion.div>
            )}

            {/* Profile */}
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              tabIndex={0}
            >
              <User className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="hidden lg:block text-sm font-medium text-slate-700 dark:text-slate-300">
                Driver
              </span>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={onThemeToggle}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5 text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5 text-slate-600" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
