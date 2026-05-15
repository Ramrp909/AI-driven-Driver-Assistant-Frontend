import { motion } from "motion/react";
import { useAI } from "../../context/AIContext";
import { Eye, Moon, Target, AlertCircle, CheckCircle, } from "lucide-react";

export default function DriverHealthMonitoring() {
  // const healthMetrics = [
  //   {
  //     id: 1,
  //     label: "Eye Tracking",
  //     status: "Focused",
  //     statusType: "safe",
  //     icon: Eye,
  //     color: "green",
  //   },
  //   {
  //     id: 2,
  //     label: "Drowsiness Detection",
  //     status: "Alert",
  //     statusType: "safe",
  //     icon: Moon,
  //     color: "green",
  //   },
  //   {
  //     id: 3,
  //     label: "Attention Score",
  //     status: "98%",
  //     statusType: "safe",
  //     icon: Target,
  //     color: "cyan",
  //   },
  //   {
  //     id: 4,
  //     label: "Alert Status",
  //     status: "Safe Driving",
  //     statusType: "safe",
  //     icon: CheckCircle,
  //     color: "green",
  //   },
  // ];

  const {
  faceDetected,
  isDrowsy,
  attentionScore,
  attentionStatus,
} = useAI();

const healthMetrics = [
  {
    id: 1,
    label: "Eye Tracking",
    status: faceDetected ? "Focused" : "Inactive",
    statusType: faceDetected ? "safe" : "warning",
    icon: Eye,
    color: faceDetected ? "green" : "amber",
  },

  {
    id: 2,
    label: "Drowsiness Detection",
    status: isDrowsy ? "Detected" : "Alert",
    statusType: isDrowsy ? "danger" : "safe",
    icon: Moon,
    color: isDrowsy ? "red" : "green",
  },

  {
    id: 3,
    label: "Attention Score",
    status: `${attentionScore}%`,
    statusType:
      attentionScore > 80
        ? "safe"
        : attentionScore > 50
        ? "warning"
        : "danger",
    icon: Target,
    color:
      attentionScore > 80
        ? "cyan"
        : attentionScore > 50
        ? "amber"
        : "red",
  },

  {
    id: 4,
    label: "Alert Status",
    status: attentionStatus,
    statusType:
      attentionStatus === "Focused"
        ? "safe"
        : attentionStatus === "Distracted"
        ? "warning"
        : "danger",
    icon: CheckCircle,
    color:
      attentionStatus === "Focused"
        ? "green"
        : attentionStatus === "Distracted"
        ? "amber"
        : "red",
  },
];
console.log({
  faceDetected,
  isDrowsy,
  attentionScore,
  attentionStatus,
});

const colorClasses = {
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
    glow: "from-green-500/10 to-transparent",
    dot: "bg-green-500",
  },

  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
    glow: "from-cyan-500/10 to-transparent",
    dot: "bg-cyan-500",
  },

  amber: {
    bg: "bg-amber-100 dark:bg-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    glow: "from-amber-500/10 to-transparent",
    dot: "bg-amber-500",
  },

  red: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-600 dark:text-red-400",
    glow: "from-red-500/10 to-transparent",
    dot: "bg-red-500",
  },
};


  return (
    <motion.section
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="mb-6 text-slate-900 dark:text-white">Driver Health Monitoring</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthMetrics.map((metric, index) => {
  const Icon = metric.icon;

  const isWarning =
    metric.statusType === "warning";

  const isDanger =
    metric.statusType === "danger";

  const colors =
    colorClasses[
      metric.color as keyof typeof colorClasses
    ];

  return (
    <motion.div
      key={metric.id}
      className="relative backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5 + index * 0.1,
      }}
    >
      {/* Glowing background effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${colors.glow}`}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-3 rounded-xl ${colors.bg}`}
          >
            <Icon
              className={`w-6 h-6 ${colors.text}`}
            />
          </div>

          {/* Status Indicator */}
          <motion.div
            className={`w-3 h-3 rounded-full ${
              isWarning
                ? "bg-amber-500"
                : isDanger
                ? "bg-red-500"
                : "bg-green-500"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <h3 className="text-sm text-slate-600 dark:text-slate-400 mb-2">
          {metric.label}
        </h3>

        <div className="flex items-center gap-2">
          <p
            className={`text-xl font-semibold ${
              isWarning
                ? "text-amber-600 dark:text-amber-400"
                : isDanger
                ? "text-red-600 dark:text-red-400"
                : colors.text
            }`}
          >
            {metric.status}
          </p>
        </div>

        {/* Live monitoring indicator */}
        <div className="mt-4 flex items-center gap-2">
          <motion.div
            className={`w-2 h-2 rounded-full ${colors.dot}`}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          <span className="text-xs text-slate-500 dark:text-slate-500">
            Live Monitoring
          </span>
        </div>
      </div>
    </motion.div>
  );
})}
      </div>
    </motion.section>
  );
}
