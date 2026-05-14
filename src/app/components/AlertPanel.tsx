import { motion } from "motion/react";
import { AlertTriangle, Info, CheckCircle, Mic, Navigation } from "lucide-react";

export default function AlertPanel() {
  const alerts = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle,
      title: "AI Assistant Active",
      message: "All systems operational",
      color: "green",
    },
    {
      id: 2,
      type: "info",
      icon: Info,
      title: "Driver Focus",
      message: "Attention level optimal",
      color: "blue",
    },
    {
      id: 3,
      type: "warning",
      icon: AlertTriangle,
      title: "Rest Suggestion",
      message: "Consider a break in 45 minutes",
      color: "amber",
    },
    {
      id: 4,
      type: "info",
      icon: Navigation,
      title: "Navigation",
      message: "Route optimized for efficiency",
      color: "cyan",
    },
  ];

  return (
    <motion.section
      id="alerts"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="mb-6 text-slate-900 dark:text-white">AI Alerts & Assistant</h2>

      <div className="grid grid-cols-1 gap-4">
        {/* Voice Assistant Card */}
        <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-2xl p-6 shadow-xl border border-cyan-200/50 dark:border-cyan-500/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-cyan-500 rounded-full">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white">Voice Assistant</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Ready to assist</p>
            </div>
          </div>

          {/* Waveform Animation */}
          <div className="flex items-center justify-center gap-1 h-16">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                animate={{
                  height: ["20%", "100%", "20%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <motion.div
              className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium flex items-center gap-2"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Listening...
            </motion.div>
          </div>
        </div>

        {/* Alert Cards */}
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          return (
            <motion.div
              key={alert.id}
              className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-slate-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg bg-${alert.color}-100 dark:bg-${alert.color}-900/30`}
                >
                  <Icon className={`w-5 h-5 text-${alert.color}-600 dark:text-${alert.color}-400`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-slate-900 dark:text-white mb-1">
                    {alert.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {alert.message}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
