import { motion } from "motion/react";
import { User, Check, Save } from "lucide-react";
import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  avatar: string;
  settings: {
    temperature: number;
    ambientLight: number;
    seatPosition: { forward: number; upward: number };
    driveMode: string;
    musicPreference: string;
  };
}

export default function DriverProfile() {
  const [profiles] = useState<Profile[]>([
    {
      id: 1,
      name: "John Driver",
      avatar: "JD",
      settings: {
        temperature: 72,
        ambientLight: 60,
        seatPosition: { forward: 50, upward: 50 },
        driveMode: "comfort",
        musicPreference: "Driving Playlist",
      },
    },
    {
      id: 2,
      name: "Sarah Smith",
      avatar: "SS",
      settings: {
        temperature: 70,
        ambientLight: 40,
        seatPosition: { forward: 45, upward: 55 },
        driveMode: "eco",
        musicPreference: "Relaxing Mix",
      },
    },
  ]);

  const [activeProfile, setActiveProfile] = useState(1);

  const currentProfile = profiles.find((p) => p.id === activeProfile);

  return (
    <motion.section
      className="scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h2 className="mb-6 text-slate-900 dark:text-white">Driver Profiles</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Selection */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
          <h3 className="text-slate-900 dark:text-white mb-4">Select Profile</h3>

          <div className="space-y-3">
            {profiles.map((profile) => {
              const isActive = activeProfile === profile.id;

              return (
                <motion.button
                  key={profile.id}
                  onClick={() => setActiveProfile(profile.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    isActive
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {profile.avatar}
                  </div>

                  <div className="flex-1 text-left">
                    <p className="font-medium text-slate-900 dark:text-white">
                      {profile.name}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {profile.settings.driveMode.charAt(0).toUpperCase() +
                        profile.settings.driveMode.slice(1)}{" "}
                      Mode
                    </p>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          <button className="w-full mt-4 px-4 py-3 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg transition-colors flex items-center justify-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">Add New Profile</span>
          </button>
        </div>

        {/* Current Profile Settings */}
        {currentProfile && (
          <div className="backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-slate-900 dark:text-white">Profile Settings</h3>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full font-semibold bg-gradient-to-br from-cyan-500 to-blue-600 text-white"
              >
                {currentProfile.avatar}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Temperature</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {currentProfile.settings.temperature}°F
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Ambient Light</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {currentProfile.settings.ambientLight}%
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Drive Mode</span>
                <span className="font-semibold text-slate-900 dark:text-white capitalize">
                  {currentProfile.settings.driveMode}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                <span className="text-sm text-slate-600 dark:text-slate-400">Music</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {currentProfile.settings.musicPreference}
                </span>
              </div>
            </div>

            <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              <span className="font-medium">Save Profile Changes</span>
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
