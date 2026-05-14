import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Eye } from "lucide-react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DriverMonitor from "./components/DriverMonitor";
import DriverHealthMonitoring from "./components/DriverHealthMonitoring";
import DriverProfile from "./components/DriverProfile";
import VehicleControls from "./components/VehicleControls";
import AlertPanel from "./components/AlertPanel";
import VehicleMetrics from "./components/VehicleMetrics";
import AIVisionTesting from "./components/AIVisionTesting";
import NotificationSystem, { useNotifications, demoNotifications } from "./components/NotificationSystem";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAIVision, setShowAIVision] = useState(false);
  const [isMonitorCompact, setIsMonitorCompact] = useState(false);
  const [showFloatingMonitor, setShowFloatingMonitor] = useState(false);
  const { notifications, addNotification, dismissNotification } = useNotifications();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Demo: Show notification after intro
  useEffect(() => {
    if (!showIntro) {
      setTimeout(() => {
        addNotification(demoNotifications.safeDriving);
      }, 2000);
    }
  }, [showIntro]);

  // const handleSectionClick = (sectionId: string) => {
  //   setActiveSection(sectionId);
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  const handleSectionClick = (sectionId: string) => {
  if (sectionId === "ai-vision") {
    setShowAIVision(true);
    return;
  }

  setShowAIVision(false);

  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  setActiveSection(sectionId);
};

  const toggleMonitorMode = () => {
    setIsMonitorCompact(!isMonitorCompact);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
          <Navbar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
          <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />

          {/* Notification System */}
          <NotificationSystem
            notifications={notifications}
            onDismiss={dismissNotification}
          />

          {/* Compact Monitor Mode */}
          {isMonitorCompact && (
            <DriverMonitor
              isCompact={true}
              onToggleCompact={toggleMonitorMode}
            />
          )}

          {/* Mobile Floating Monitor Button */}
          <motion.button
            className="fixed bottom-6 left-6 z-40 lg:hidden p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-2xl"
            onClick={() => setShowFloatingMonitor(!showFloatingMonitor)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="w-6 h-6 text-white" />
          </motion.button>

          {/* Mobile Floating Monitor Panel */}
          <AnimatePresence>
            {showFloatingMonitor && (
              <>
                <motion.div
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowFloatingMonitor(false)}
                />
                <motion.div
                  className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 rounded-t-3xl p-6 shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Driver Monitor
                      </h3>
                      <button
                        onClick={() => setShowFloatingMonitor(false)}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm"
                      >
                        Close
                      </button>
                    </div>
                    <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                      <Eye className="w-16 h-16 text-slate-400" />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <main className="lg:ml-64 px-4 lg:px-8 py-8 pb-24 max-w-[1600px]">
            {showAIVision ? (
                <AIVisionTesting />
              ) : (
            <div className="space-y-12">
              {/* Dashboard Overview Section */}
              <section id="dashboard" className="scroll-mt-20">
                <h2 className="mb-6 text-slate-900 dark:text-white">Dashboard Overview</h2>

                {/* Desktop Layout - Default or Compact */}
                {!isMonitorCompact ? (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <DriverMonitor onToggleCompact={toggleMonitorMode} />
                    </div>
                    <div>
                      <AlertPanel />
                    </div>
                  </div>
                ) : (
                  // Compact Mode - Priority Layout
                  <div className="space-y-6">
                    <DriverHealthMonitoring />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <VehicleMetrics />
                      </div>
                      <div>
                        <AlertPanel />
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Driver Health Monitoring - Below Driver Monitor in Default Mode */}
              {!isMonitorCompact && <DriverHealthMonitoring />}

              {/* Driver Profile Management */}
              <section id="settings" className="scroll-mt-20">
                <DriverProfile />
              </section>

              {/* Vehicle Metrics Section */}
              {!isMonitorCompact && (
                <section id="vehicle-metrics" className="scroll-mt-20">
                  <VehicleMetrics />
                </section>
              )}

              {/* Vehicle Controls Section */}
              <section id="vehicle-controls" className="scroll-mt-20">
                <VehicleControls />
              </section>

              {/* Alerts Section */}
              <section id="alerts" className="scroll-mt-20">
                <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
                  <h2 className="mb-4 text-slate-900 dark:text-white">Test Notifications</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Click buttons below to test the notification system (production-ready for future AI integrations)
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <button
                      onClick={() => addNotification(demoNotifications.drowsinessDetected)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      Drowsiness Alert
                    </button>
                    <button
                      onClick={() => addNotification(demoNotifications.distractionWarning)}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
                    >
                      Distraction Warning
                    </button>
                    <button
                      onClick={() => addNotification(demoNotifications.collisionWarning)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                    >
                      Collision Warning
                    </button>
                    <button
                      onClick={() => addNotification(demoNotifications.fatigueAlert)}
                      className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-lg transition-colors"
                    >
                      Fatigue Alert
                    </button>
                    <button
                      onClick={() => addNotification(demoNotifications.safeDriving)}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      Safe Driving
                    </button>
                    <button
                      onClick={() => addNotification(demoNotifications.aiRecommendation)}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      AI Recommendation
                    </button>
                  </div>
                </div>
              </section>
             
            </div>)}
          </main>
        </div>
      )}
    </>
  );
}