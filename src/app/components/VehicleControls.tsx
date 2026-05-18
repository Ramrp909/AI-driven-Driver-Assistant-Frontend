import { motion } from "motion/react";
import { useState } from "react";
import { ThermometerSun, Armchair, Lightbulb, Zap, Music, Play, Pause, SkipForward, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";

export default function VehicleControls() {
  const [temperature, setTemperature] = useState(72);
  const [seatPosition, setSeatPosition] = useState({ forward: 50, upward: 50 });
  const [ambientLight, setAmbientLight] = useState(60);
  const [driveMode, setDriveMode] = useState("comfort");
  const [isPlaying, setIsPlaying] = useState(false);

  const driveModes = [
    { id: "eco", label: "Eco" },
    { id: "comfort", label: "Comfort" },
    { id: "sport", label: "Sport" },
    { id: "track", label: "Track" },
  ];

  const handleSeatAdjustment = (direction: string) => {
    setSeatPosition((prev) => {
      switch (direction) {
        case "forward":
          return { ...prev, forward: Math.max(0, prev.forward - 5) };
        case "backward":
          return { ...prev, forward: Math.min(100, prev.forward + 5) };
        case "up":
          return { ...prev, upward: Math.min(100, prev.upward + 5) };
        case "down":
          return { ...prev, upward: Math.max(0, prev.upward - 5) };
        default:
          return prev;
      }
    });
  };

  return (
    <motion.section
      id="vehicle-controls"
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="mb-6 text-slate-900 dark:text-white">Vehicle Controls</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
        {/* AC Temperature Control */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <ThermometerSun className="w-5 h-5 text-cyan-500" />
            <h3 className="text-slate-900 dark:text-white">Climate Control</h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-light text-slate-900 dark:text-white">
              {temperature}°F
            </span>
            <div className="flex-1">
              <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                value={[temperature]}
                onValueChange={(value) => setTemperature(value[0])}
                max={85}
                min={60}
                step={1}
              >
                <Slider.Track className="bg-slate-200 dark:bg-slate-700 relative grow rounded-full h-2">
                  <Slider.Range className="absolute bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-cyan-50 focus:outline-none focus:shadow-xl border-2 border-cyan-500" />
              </Slider.Root>
            </div>
          </div>
        </div>

        {/* Seat Adjustment with Directional Buttons */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Armchair className="w-5 h-5 text-cyan-500" />
            <h3 className="text-slate-900 dark:text-white">Seat Position</h3>
          </div>

          <div className="flex items-center justify-center gap-8">
            {/* Forward/Backward Controls */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Forward / Back
              </span>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => handleSeatAdjustment("forward")}
                  className="p-4 bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:dark:bg-cyan-600 rounded-xl transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                </motion.button>
                <motion.button
                  onClick={() => handleSeatAdjustment("backward")}
                  className="p-4 bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:dark:bg-cyan-600 rounded-xl transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                </motion.button>
              </div>
            </div>

            {/* Up/Down Controls */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                Up / Down
              </span>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => handleSeatAdjustment("up")}
                  className="p-4 bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:dark:bg-cyan-600 rounded-xl transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronUp className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                </motion.button>
                <motion.button
                  onClick={() => handleSeatAdjustment("down")}
                  className="p-4 bg-slate-100 dark:bg-slate-900 hover:bg-cyan-500 hover:dark:bg-cyan-600 rounded-xl transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-white" />
                </motion.button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between text-xs text-slate-600 dark:text-slate-400">
            <span>Position: {seatPosition.forward}% / {seatPosition.upward}%</span>
          </div>
        </div>

        {/* Ambient Lighting */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-cyan-500" />
            <h3 className="text-slate-900 dark:text-white">Ambient Lighting</h3>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={[ambientLight]}
            onValueChange={(value) => setAmbientLight(value[0])}
            max={100}
            min={0}
            step={1}
          >
            <Slider.Track className="bg-slate-200 dark:bg-slate-700 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white shadow-lg rounded-full hover:bg-cyan-50 focus:outline-none focus:shadow-xl border-2 border-cyan-500" />
          </Slider.Root>
          <div className="flex justify-between mt-2 text-xs text-slate-600 dark:text-slate-400">
            <span>Off</span>
            <span>Bright</span>
          </div>
        </div>

        {/* Drive Mode Selector */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-cyan-500" />
            <h3 className="text-slate-900 dark:text-white">Drive Mode</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {driveModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setDriveMode(mode.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  driveMode === mode.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Music Player */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-5 h-5 text-cyan-500" />
            <h3 className="text-slate-900 dark:text-white">Music Player</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Now Playing: Driving Playlist
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors">
                <SkipForward className="w-5 h-5 rotate-180 text-slate-700 dark:text-slate-300" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors">
                <SkipForward className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
