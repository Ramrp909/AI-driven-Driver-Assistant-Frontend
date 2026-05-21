import { useState } from "react";

import {
  BrainCircuit,
  Mic,
  Navigation,
  Shield,
  Sparkles,
  Volume2,
  X,
} from "lucide-react";

const suggestions = [

  {
    title: "Fatigue Detected",
    message:
      "Driver attention reduced slightly. Suggested short break in 18 km.",
    icon: Shield,
    status: "warning",
  },

  {
    title: "Route Optimized",
    message:
      "AI rerouted navigation to avoid heavy traffic near downtown corridor.",
    icon: Navigation,
    status: "active",
  },

  {
    title: "Climate Adjusted",
    message:
      "Cabin temperature automatically reduced for comfort optimization.",
    icon: Sparkles,
    status: "normal",
  },

];

export default function AIAssistant() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeSuggestion =
    suggestions[activeIndex];

  const ActiveIcon =
    activeSuggestion.icon;

  return (

    <div className="
      w-full
      h-full

      flex
      flex-col

      px-4
      py-3
    ">

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between

        mb-3
      ">

        <div>

          <h2 className="
            text-[10px]
            uppercase
            tracking-[0.25em]

            text-muted-foreground
          ">
            AI Assistant
          </h2>

          <p className="
            text-[11px]
            text-muted-foreground/70

            mt-1
          ">
            Vehicle Intelligence Copilot
          </p>

        </div>

        {/* AI Active */}
        <div className="
          flex
          items-center
          gap-2
        ">

          <div className="
            w-2 h-2
            rounded-full

            bg-blue-500
            dark:bg-emerald-400

            animate-pulse
          " />

          <span className="
            text-[10px]
            uppercase
            tracking-wide

            text-blue-500
            dark:text-emerald-400
          ">
            Active
          </span>

        </div>

      </div>

      {/* Assistant Surface */}
      <div className="
        flex-1

        rounded-[24px]

        bg-muted/20

        border
        border-border/30

        backdrop-blur-sm

        px-4
        py-3

        flex
        items-center
        justify-between

        overflow-hidden
      ">

        {/* Left Section */}
        <div className="
          flex
          items-center
          gap-4

          min-w-0
          flex-1
        ">

          {/* AI Core */}
          <div className="
            relative

            w-12 h-12

            rounded-2xl

            bg-blue-500/10
            dark:bg-emerald-400/10

            flex
            items-center
            justify-center

            flex-shrink-0
          ">

            <div className="
              absolute inset-0

              rounded-2xl

              border
              border-blue-500/20
              dark:border-emerald-400/20
            " />

            <BrainCircuit className="
              w-6 h-6

              text-blue-500
              dark:text-emerald-400
            " />

          </div>

          {/* Message */}
          <div className="
            min-w-0
          ">

            <div className="
              flex
              items-center
              gap-2

              mb-1
            ">

              <ActiveIcon
                className={`
                  w-4 h-4

                  ${
                    activeSuggestion.status === "warning"
                      ? "text-yellow-400"
                      : activeSuggestion.status === "active"
                      ? "text-blue-500 dark:text-emerald-400"
                      : "text-muted-foreground"
                  }
                `}
              />

              <h3 className="
                text-sm
                font-medium

                text-foreground
              ">
                {activeSuggestion.title}
              </h3>

            </div>

            <p className="
              text-xs
              leading-relaxed

              text-muted-foreground

              max-w-[420px]
            ">
              {activeSuggestion.message}
            </p>

          </div>

        </div>

        {/* Right Actions */}
        <div className="
          flex
          items-center
          gap-2

          ml-4
        ">

          {/* Voice */}
          <button
            className="
              w-10 h-10

              rounded-xl

              flex
              items-center
              justify-center

              text-muted-foreground

              hover:text-foreground
              hover:bg-muted/30

              transition-all
            "
          >

            <Mic className="
              w-4 h-4
            " />

          </button>

          {/* Audio */}
          <button
            className="
              w-10 h-10

              rounded-xl

              flex
              items-center
              justify-center

              text-muted-foreground

              hover:text-foreground
              hover:bg-muted/30

              transition-all
            "
          >

            <Volume2 className="
              w-4 h-4
            " />

          </button>

          {/* Dismiss */}
          <button
            onClick={() =>
              setActiveIndex(
                (prev) =>
                  (prev + 1) %
                  suggestions.length
              )
            }
            className="
              w-10 h-10

              rounded-xl

              flex
              items-center
              justify-center

              text-muted-foreground

              hover:text-foreground
              hover:bg-muted/30

              transition-all
            "
          >

            <X className="
              w-4 h-4
            " />

          </button>

        </div>

      </div>

    </div>

  );

}