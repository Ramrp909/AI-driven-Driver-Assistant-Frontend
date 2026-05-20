import { motion, AnimatePresence } from "motion/react";
import {
  Activity,
  Brain,
  Eye,
  HeartPulse,
  ScanFace,
  Shield,
  X,
} from "lucide-react";

interface TelemetryPanelProps {
  open: boolean;
  onClose: () => void;
}

const telemetry = [

  {
    label: "Attention",
    value: "92%",
    icon: Brain,
    color: "blue",
  },

  {
    label: "Blink Rate",
    value: "Normal",
    icon: Eye,
    color: "green",
  },

  {
    label: "Heart Rate",
    value: "78 BPM",
    icon: HeartPulse,
    color: "red",
  },

  {
    label: "Stress",
    value: "Low",
    icon: Activity,
    color: "yellow",
  },

  {
    label: "Face Tracking",
    value: "Locked",
    icon: ScanFace,
    color: "green",
  },

  {
    label: "AI Safety",
    value: "Stable",
    icon: Shield,
    color: "blue",
  },

];

export default function TelemetryPanel({
  open,
  onClose,
}: TelemetryPanelProps) {

  return (

    <AnimatePresence>

      {open && (

        <>

          
          {/* <motion.div
            className="
              fixed inset-0
              z-[90]

              bg-black/20
              backdrop-blur-[2px]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          /> */}

          {/* Side Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 240,
            }}
            className="

absolute
top-0
-right-[340px]
              z-[120]

              w-[320px]
              h-full

              rounded-[32px]

              border
              border-border/60

              bg-background/80

              backdrop-blur-xl

              shadow-2xl
            "
          >

            <div className="
              h-full
              flex flex-col

              p-5
            ">

              {/* Header */}
              <div className="
                flex items-center
                justify-between

                mb-5
              ">

                <div>

                  <h2 className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]

                    text-muted-foreground
                  ">
                    Telemetry
                  </h2>

                  <p className="
                    text-xs
                    text-muted-foreground/70

                    mt-1
                  ">
                    AI Driver Diagnostics
                  </p>

                </div>

                <button
                  onClick={onClose}
                  className="
                    text-muted-foreground
                    hover:text-foreground

                    transition-colors
                  "
                >

                  <X className="
                    w-4 h-4
                  " />

                </button>

              </div>

              {/* Telemetry Grid */}
              <div className="
                grid
                grid-cols-2
                gap-3
              ">

                {telemetry.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.label}
                      className="
                        relative

                        rounded-2xl

                        bg-muted/20

                        border
                        border-border/40

                        p-3

                        overflow-hidden
                      "
                    >

                      {/* Accent Line */}
                      <div className={`
                        absolute
                        left-0
                        top-0
                        bottom-0
                        w-[2px]

                        ${
                          item.color === "green"
                            ? "bg-green-400"
                            : item.color === "red"
                            ? "bg-red-400"
                            : item.color === "yellow"
                            ? "bg-yellow-400"
                            : "bg-blue-500 dark:bg-emerald-400"
                        }
                      `} />

                      <div className="
                        flex
                        flex-col
                        gap-3
                      ">

                        <Icon className={`
                          w-4 h-4

                          ${
                            item.color === "green"
                              ? "text-green-400"
                              : item.color === "red"
                              ? "text-red-400"
                              : item.color === "yellow"
                              ? "text-yellow-400"
                              : "text-blue-500 dark:text-emerald-400"
                          }
                        `} />

                        <div>

                          <div className="
                            text-[9px]
                            uppercase
                            tracking-wide

                            text-muted-foreground
                          ">
                            {item.label}
                          </div>

                          <div className="
                            mt-1

                            text-sm
                            font-medium

                            text-foreground
                          ">
                            {item.value}
                          </div>

                        </div>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>

  );

}