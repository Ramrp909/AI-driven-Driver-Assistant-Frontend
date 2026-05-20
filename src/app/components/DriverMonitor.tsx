import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import Webcam from "react-webcam";
import { useRef,useEffect,useState } from "react";
import { useAI } from "../../context/AIContext";
import NotificationSystem, { demoNotifications } from "./NotificationSystem";


import { Camera, Eye, Target, Circle, Clock, Pin, Minimize2, Maximize2, X, AlertTriangle,  } from "lucide-react";
import useDriverMonitor from "../../hooks/useDriverMonitor";
import MobileStatusPills from "./MobileStatusPills";

interface DriverMonitorProps {
  isCompact?: boolean;
  onToggleCompact?: () => void;
}

export default function DriverMonitor({ isCompact = false, onToggleCompact }: DriverMonitorProps) {

const {
  webcamRef,
  faceDetected,
  faceCount,
  isScanning,
  isDrowsy,
  attentionScore,
  attentionStatus,
  showDangerAlert,
} = useDriverMonitor();

const [isMobile, setIsMobile] =
  useState(false);

const colorClasses = {
  green: "text-green-500",
  cyan: "text-cyan-500",
  red: "text-red-500",
};

  const statusCards = [
  {
    label: "AI Status",
    // value: isScanning
    //   ? "Scanning"
    //   : faceDetected
    //   ? "Driver Detected"
    //   : "No Driver",
      value: isScanning
  ? "Scanning"
  : isDrowsy
  ? "Drowsiness Detected"
  : faceDetected
  ? "Driver Detected"
  : "No Driver",
    // color: isScanning
    //   ? "cyan"
    //   : faceDetected
    //   ? "green"
    //   : "red",
      color: isScanning
  ? "cyan"
  : isDrowsy
  ? "red"
  : faceDetected
  ? "green"
  : "red",
    icon: Target,
  },
  // {
  //   label: "Driver Attention",
  //   value: faceDetected ? "95%" : "0%",
  //   color: faceDetected ? "green" : "red",
  //   icon: Eye,
  // },
  {
  label: "Driver Attention",
  value: attentionStatus,
  color: isDrowsy ? "red" : "green",
  icon: Eye,
},
  {
    label: "Face Count",
    value: `${faceCount}`,
    color: faceDetected ? "cyan" : "red",
    icon: Camera,
  },
  {
    label: "Posture Status",
    value: faceDetected ? "Good" : "Unknown",
    color: faceDetected ? "green" : "red",
    icon: Circle,
  },
  {
    label: "Response Time",
    value: "0.2s",
    color: "cyan",
    icon: Clock,
  },
];

useEffect(() => {

  const checkMobile = () => {

    setIsMobile(
      window.innerWidth < 768
    );

  };

  checkMobile();

  window.addEventListener(
    "resize",
    checkMobile
  );

  return () => {

    window.removeEventListener(
      "resize",
      checkMobile
    );

  };

}, []);


 const emergencyOverlay = showDangerAlert && (
  <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-red-500/20 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl border border-red-500 max-w-md w-full mx-4"
      initial={{ scale: 0.8, y: 40 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 40 }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center mb-6"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          <AlertTriangle className="w-12 h-12 text-white" />
        </motion.div>

        <h2 className="text-3xl font-bold text-red-500 mb-3">
          Drowsiness Detected
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Driver attention level critically low.
          Please stay alert or take a break immediately.
        </p>

        <div className="w-full p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
          <p className="text-red-500 font-medium">
            AI Emergency Safety Protocol Activated
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);


const renderCompactLayout = () => (
  <>
    {/* paste compact JSX here */}
    <motion.div
      drag
      dragMomentum={false}
        className="fixed left-4 top-24 z-30 w-80"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -400, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 rounded-2xl p-4 shadow-2xl border border-gray-200/50 dark:border-slate-700/50">
          {/* Header with controls */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Driver Monitor
            </h3>
            <div className="flex gap-1">
              <button
                onClick={onToggleCompact}
                className="p-1.5 hover:bg-slate-100 dark:hover:bg-transparent rounded-lg transition-colors"
                title="Expand"
              >
                <Maximize2 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              </button>
            </div>
          </div>

          {/* Compact Camera View */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden">
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="w-12 h-12 text-slate-400 dark:text-slate-600" />
            </div> */}
            <Webcam
                audio={false}
                mirrored={true}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "user",
                }}
                className="w-full h-full object-cover"
              />

            {/* AI Scanning Animation */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-500"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Status Badge */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <div className="px-2 py-1 bg-green-500/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-[10px] font-medium tracking-widetext-white">Active</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          
          <div className="grid grid-cols-2 gap-2 mt-3">
            {statusCards.slice(0, 4).map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <Icon className={`w-3 h-3 text-${card.color}-500`} />
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {card.label}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold text-${card.color}-600 dark:text-${card.color}-400`}>
                    {card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
  </>
);

const renderDesktopLayout = () => (
  <>
    {/* existing normal return JSX */}
    
    <motion.section
      id="driver-monitor"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className=
        "text-sm font-semibold tracking-wide text-slate-300 uppercase">Driver Monitor</h2>
        {onToggleCompact && (
          <button
            onClick={onToggleCompact}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
            <span className="text-sm font-medium">Compact Mode</span>
          </button>
        )}
      </div>

      {/* Main Camera Card */}
      {/* <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50"> */}
      <div className="h-full flex flex-col">
        {/* Webcam Placeholder */}

          <div className="
relative

aspect-video
md:aspect-[4/3]

w-full

bg-gradient-to-br
from-slate-950
to-slate-900

rounded-[28px]
overflow-hidden

border border-cyan-500/20
shadow-[0_0_30px_rgba(6,182,212,0.08)]

mb-3
">

              
          {/* Camera icon placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Camera className="w-20 h-20 text-slate-400 dark:text-slate-600" /> */}
            <Webcam
              ref={webcamRef}
                audio={false}
                mirrored={true}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: "user",
                }}
                className="w-full h-full object-cover"
              />
          </div>

          {/* AI Scanning Animation Overlay */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-500"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-cyan-500" />
          <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-cyan-500" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-l-2 border-b-2 border-cyan-500" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-r-2 border-b-2 border-cyan-500" />

          {/* Status Badges */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div
                  className={`px-2 py-1 backdrop-blur-sm rounded-full flex items-center gap-2 ${
                    faceDetected
                      ? "bg-green-500/90"
                      : "bg-red-500/90"
                  }`}
                >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-medium tracking-widetext-white">{faceDetected ? "Face Detected" : "No Driver"}</span>
            </div>
            <div className="px-3 py-1.5 bg-cyan-500/90 backdrop-blur-sm rounded-full flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-medium tracking-widetext-white">AI Monitoring</span>
            </div>
          </div>

          {/* Recording Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[10px] font-medium tracking-widetext-white">Recording</span>
          </div>
        </div>

        {/* Status Cards Grid */}
        {!isMobile && (
        <div className="grid grid-cols-2 gap-2 mt-3">
          {statusCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                className="p-2 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 text-${card.color}-500`} />
                  <span className="text-xs text-slate-600 dark:text-slate-400">
                    {card.label}
                  </span>
                </div>
                <p className={`text-lg font-semibold text-${card.color}-600 dark:${
    colorClasses[card.color as keyof typeof colorClasses]
  }`}>
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>
        )}

{isMobile && (
  <MobileStatusPills
    statusCards={statusCards}
  />
)}
      </div>
    </motion.section>
  </>
);

  return (<>
  {emergencyOverlay}
    {isCompact
      ? renderCompactLayout()
      : renderDesktopLayout()}
    </>
  );
  
}
