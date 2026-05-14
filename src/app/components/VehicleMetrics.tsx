import { motion } from "motion/react";
import { Gauge, Battery, Thermometer, MapPin, Zap } from "lucide-react";

export default function VehicleMetrics() {
  const metrics = [
    {
      label: "Speed",
      value: "65",
      unit: "mph",
      icon: Gauge,
      color: "cyan",
      max: 120,
      current: 65,
    },
    {
      label: "Battery",
      value: "87",
      unit: "%",
      icon: Battery,
      color: "green",
      max: 100,
      current: 87,
    },
    {
      label: "Temperature",
      value: "72",
      unit: "°F",
      icon: Thermometer,
      color: "blue",
      max: 100,
      current: 72,
    },
    {
      label: "Power",
      value: "245",
      unit: "kW",
      icon: Zap,
      color: "amber",
      max: 350,
      current: 245,
    },
  ];

  return (
    <motion.section
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h2 className="mb-6 text-slate-900 dark:text-white">Vehicle Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const percentage = (metric.current / metric.max) * 100;

          return (
            <motion.div
              key={metric.label}
              className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-${metric.color}-100 dark:bg-${metric.color}-900/30 rounded-lg`}>
                  <Icon className={`w-5 h-5 text-${metric.color}-600 dark:text-${metric.color}-400`} />
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {metric.label}
                </span>
              </div>

              <div className="mb-3">
                <span className="text-3xl font-light text-slate-900 dark:text-white">
                  {metric.value}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                  {metric.unit}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-600`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* GPS Location Card */}
      <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-slate-900 dark:text-white">GPS Location</h3>
        </div>

        <div className="aspect-video bg-slate-100 dark:bg-slate-900 rounded-xl overflow-hidden relative">
          {/* Map placeholder with grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-slate-400 dark:text-slate-600"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Location marker */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <MapPin className="w-12 h-12 text-green-500" fill="currentColor" />
            </motion.div>
          </div>

          {/* Pulse effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 bg-green-500 rounded-full"
              animate={{
                scale: [1, 2.5],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Current Location</p>
            <p className="font-medium text-slate-900 dark:text-white">
              Downtown, City Center
            </p>
          </div>
          <div className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Connected
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
