import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { useState, useEffect } from "react";

export interface Notification {
  id: string;
  type: "danger" | "warning" | "safe" | "info";
  title: string;
  message: string;
  duration?: number;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onDismiss: (id: string) => void;
}

export default function NotificationSystem({
  notifications,
  onDismiss,
}: NotificationSystemProps) {
  const getNotificationStyles = (type: Notification["type"]) => {
    switch (type) {
      case "danger":
        return {
          bg: "bg-red-500/95",
          icon: AlertCircle,
          iconColor: "text-white",
        };
      case "warning":
        return {
          bg: "bg-amber-500/95",
          icon: AlertTriangle,
          iconColor: "text-white",
        };
      case "safe":
        return {
          bg: "bg-green-500/95",
          icon: CheckCircle,
          iconColor: "text-white",
        };
      case "info":
        return {
          bg: "bg-blue-500/95",
          icon: Info,
          iconColor: "text-white",
        };
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 max-w-md">
      <AnimatePresence>
        {notifications.map((notification) => {
          const styles = getNotificationStyles(notification.type);
          const Icon = styles.icon;

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`${styles.bg} backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/20`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Icon className={`w-6 h-6 ${styles.iconColor}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white mb-1">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-white/90">{notification.message}</p>
                </div>

                <button
                  onClick={() => onDismiss(notification.id)}
                  className="flex-shrink-0 p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Auto-dismiss progress bar */}
              {notification.duration && (
                <motion.div
                  className="mt-3 h-1 bg-white/30 rounded-full overflow-hidden"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: notification.duration / 1000, ease: "linear" }}
                />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

// Hook to manage notifications
// export function useNotifications() {
//   const [notifications, setNotifications] = useState<Notification[]>([]);

//   const addNotification = (notification: Omit<Notification, "id">) => {
//     const id = Math.random().toString(36).substring(7);
//     const newNotification = { ...notification, id };

//     setNotifications((prev) => [...prev, newNotification]);

//     if (notification.duration) {
//       setTimeout(() => {
//         dismissNotification(id);
//       }, notification.duration);
//     }
//   };

//   const dismissNotification = (id: string) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   };

//   return {
//     notifications,
//     addNotification,
//     dismissNotification,
//   };
// }

// Demo notification examples (can be triggered from anywhere in the app)
export const demoNotifications = {
  drowsinessDetected: {
    type: "danger" as const,
    title: "Drowsiness Detected",
    message: "Please pull over and take a break. Your safety is our priority.",
    duration: 8000,
  },
  distractionWarning: {
    type: "warning" as const,
    title: "Driver Distraction Detected",
    message: "Please focus on the road ahead.",
    duration: 5000,
  },
  collisionWarning: {
    type: "danger" as const,
    title: "Collision Warning",
    message: "Obstacle detected ahead. Reduce speed immediately.",
    duration: 6000,
  },
  fatigueAlert: {
    type: "warning" as const,
    title: "Fatigue Alert",
    message: "Consider taking a 15-minute break soon.",
    duration: 5000,
  },
  safeDriving: {
    type: "safe" as const,
    title: "Safe Driving",
    message: "You're doing great! Keep up the excellent driving.",
    duration: 4000,
  },
  aiRecommendation: {
    type: "info" as const,
    title: "AI Recommendation",
    message: "Traffic ahead. Alternate route suggested.",
    duration: 5000,
  },
};
