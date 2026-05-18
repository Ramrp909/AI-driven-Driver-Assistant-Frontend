import { motion } from "motion/react";
import { X, Eye, Moon, Target } from "lucide-react";
import Webcam from "react-webcam";
import useDriverMonitor from "../../hooks/useDriverMonitor";

interface FloatingMobileMonitorProps {
  onClose: () => void;
}

export default function FloatingMobileMonitor({
  onClose,
}: FloatingMobileMonitorProps) {

  const {
    webcamRef,
    attentionStatus,
    isDrowsy,
    attentionScore,
  } = useDriverMonitor();

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: 40,
      }}
      className="
        fixed
        bottom-24
        left-4
        z-50
        w-72
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/30
        bg-white/90
        dark:bg-slate-900/90
        backdrop-blur-xl
        shadow-2xl
      "
    >

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between
        px-4
        py-3
        border-b
        border-slate-200/50
        dark:border-slate-700/50
      ">

        <div className="flex items-center gap-2">

          <motion.div
            className="
              w-2
              h-2
              rounded-full
              bg-green-500
            "
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          <span className="
            text-sm
            font-medium
            text-slate-900
            dark:text-white
          ">
            Driver Monitor
          </span>
        </div>

        <button
          onClick={onClose}
          className="
            p-2
            rounded-xl
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition-colors
          "
        >
          <X className="w-4 h-4 text-slate-500" />
        </button>
      </div>

      {/* Webcam Feed */}
      <div className="
        relative
        aspect-video
        bg-black
      ">

        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* AI Active Badge */}
        <div className="
          absolute
          top-3
          right-3
          px-2
          py-1
          rounded-full
          bg-cyan-500/90
          text-white
          text-xs
          font-medium
          backdrop-blur-md
        ">
          AI ACTIVE
        </div>
      </div>

      {/* Mini Telemetry Strip */}
      <div className="
        grid
        grid-cols-3
        gap-2
        p-3
      ">

        {/* Attention */}
        <div className="
          flex
          flex-col
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          dark:bg-slate-800
          py-2
        ">
          <Eye className="
            w-4
            h-4
            text-cyan-500
            mb-1
          " />

          <span className="
            text-[10px]
            text-slate-500
          ">
            Focus
          </span>

          <span className="
            text-xs
            font-semibold
            text-slate-900
            dark:text-white
          ">
            {attentionStatus}
          </span>
        </div>

        {/* Drowsy */}
        <div className="
          flex
          flex-col
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          dark:bg-slate-800
          py-2
        ">
          <Moon className={`
            w-4
            h-4
            mb-1
            ${
              isDrowsy
                ? "text-red-500"
                : "text-green-500"
            }
          `} />

          <span className="
            text-[10px]
            text-slate-500
          ">
            Status
          </span>

          <span className={`
            text-xs
            font-semibold
            ${
              isDrowsy
                ? "text-red-500"
                : "text-green-500"
            }
          `}>
            {isDrowsy
              ? "Drowsy"
              : "Alert"}
          </span>
        </div>

        {/* Score */}
        <div className="
          flex
          flex-col
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          dark:bg-slate-800
          py-2
        ">
          <Target className="
            w-4
            h-4
            text-cyan-500
            mb-1
          " />

          <span className="
            text-[10px]
            text-slate-500
          ">
            Score
          </span>

          <span className="
            text-xs
            font-semibold
            text-slate-900
            dark:text-white
          ">
            {attentionScore}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}