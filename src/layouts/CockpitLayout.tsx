import { useEffect, useState } from "react";
import AIAlerts from "../app/components/AIAlerts";
import AICenter from "../app/components/AICenter";
import CockpitHeader from "../app/components/CockpitHeader";
import DriverMonitor
from "../app/components/DriverMonitor";
import VehicleControls from "../app/components/VehicleControls";
import VehicleMetrics from "../app/components/VehicleMetrics";
import VehicleStatus from "../app/components/VehicleStatus";
import NavRail from "../app/components/NavRail";

export default function CockpitLayout() {
const [isDark, setIsDark] = useState(false);
    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDark]);

  return (

    // <div className="min-h-screen p-4 overflow-hidden">
      <div className="min-h-screen p-4 overflow-hidden bg-cover bg-center" 
     style={{backgroundImage: 'url(your-image-url)'}}>

  {/* Header */}
  <div
    className="
      h-16 mb-4 rounded-2xl
      border border-border
      bg-background/80
    "
  >
    <CockpitHeader isDark={isDark} onThemeToggle={() => setIsDark(!isDark)}/>
  </div>

  {/* Outer Cockpit Shell */}
    <div className="flex gap-4 h-[calc(100vh-72px)]">

    {/* Full Height Navigation Rail */}
    <div
      className="
        w-[80px]
        rounded-2xl
        border border-border
        bg-background/80
        p-4
        flex-shrink-0
      "
    >
      <NavRail />
    </div>

    {/* Right Cockpit Content */}
    <div className="flex-1 flex flex-col gap-4 overflow-visible">

      {/* Main Cockpit Grid */}
      <div
        className="
          grid
          grid-cols-3
          gap-4
          flex-1
          min-h-0
        "
      >

        {/* Driver Monitor */}


            {/* <div
            className="
              rounded-[32px]
              border border-border
              bg-background/80
              p-4
              overflow-hidden
              h-full
              min-h-0
            "
          > */}

            <div
  className="
    relative
    rounded-[32px]
    border border-border
    bg-background/80
    p-4
    overflow-visible
    h-full
    min-h-0
  "
>
          <DriverMonitor />
        </div>

        {/* AI Center */}
        
            <div
            className="
              rounded-[32px]
              border border-border
              bg-background/80
              p-4
              overflow-hidden
              h-full
              min-h-0
            "
          >
          <AICenter/>
        </div>

        {/* Right Side Stack */}
            <div className="
          grid
          grid-rows-3
          gap-4
          h-full
          min-h-0
          ">

          <div
            className="
              
              rounded-[28px]
overflow-hidden
min-h-0
              border border-border
              bg-background/80
              p-4
            "
          >
          <VehicleStatus />
          </div>

          <div
            className="
              
              rounded-[28px]
overflow-hidden
min-h-0
              border border-border
              bg-background/80
              p-4
            "
          >
            <VehicleMetrics />
          </div>

          <div
            className="
              rounded-[28px]
              overflow-hidden
              min-h-0
              border border-border
              bg-background/80
              p-4
            "
          >
            <AIAlerts/>
          </div>

        </div>

      </div>

      {/* Bottom Controls */}
      <div
        className="
          grid
          grid-cols-[1.2fr_0.8fr]
          gap-4
          h-[120px]
          flex-shrink-0
        "
      >

        <div
          className="
            rounded-xl
            border border-border
            bg-background/80
          "
        >
          <VehicleControls />
        </div>

        <div
          className="
            rounded-[28px]
            border border-border
            bg-background/80
          "
        >
          AI Assistant
        </div>

      </div>

    </div>

  </div>

</div>

  );

}