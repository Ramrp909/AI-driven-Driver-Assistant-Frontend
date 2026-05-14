import { LayoutDashboard, Eye, Sliders, AlertTriangle, Settings, Menu, X, Gauge } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "driver-monitor", label: "Driver Monitor", icon: Eye },
  { id: "vehicle-controls", label: "Vehicle Controls", icon: Sliders },
  { id: "vehicle-metrics", label: "Vehicle Metrics", icon: Gauge },
  { id: "alerts", label: "Alerts", icon: AlertTriangle },
  { id: "settings", label: "Settings", icon: Settings },
  {
  id: "ai-vision",
  label: "AI Vision Lab",
  icon: Eye,
},
];

export default function Sidebar({ activeSection, onSectionClick }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const SidebarContent = () => (
    <div className="flex flex-col gap-2 p-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => {
              onSectionClick(item.id);
              setIsMobileOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              isActive
                ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-20 left-4 z-50 lg:hidden p-3 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
      >
        {isMobileOpen ? (
          <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        ) : (
          <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-r border-gray-200/50 dark:border-slate-700/50"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed left-0 top-0 bottom-0 z-50 w-64 backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 shadow-2xl lg:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-4 border-b border-gray-200/50 dark:border-slate-700/50">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Navigation
                </h2>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
