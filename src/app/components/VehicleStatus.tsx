import {
  BatteryCharging,
  BatteryChargingIcon,
  Navigation,
  Waves,
} from "lucide-react";

export default function VehicleStatus() {

  return (

    <div className="
      w-full
      h-full

      flex
      flex-col
    ">

      {/* Header */}
      <div className="
        flex
        items-center
        justify-between

        mb-2
      ">

        <div className="
          flex
          items-center
          gap-2
        ">

          <span className="
            text-[10px]
            uppercase
            tracking-[0.25em]

            text-muted-foreground
          ">
            Vehicle Status
          </span>

          <span className="
            text-[10px]

            text-blue-500
            dark:text-emerald-400
          ">
            Active
          </span>

        </div>

      </div>

      {/* Main Cluster */}
      <div className="
        flex-1

        flex
        items-center
        justify-between

        gap-3
      ">

        {/* Speedometer */}
        {/* Speedometer */}
<div className="
  relative

  w-[100px]
  h-[100px]

  flex-shrink-0
">

  {/* Background Ring */}
  <div className="
    absolute inset-0

    rounded-full

    border-[10px]
    border-border/20
  " />

  {/* Active Arc */}
  <div className="
    absolute inset-0

    rounded-full

    border-[10px]
    border-transparent

    border-t-blue-500
    border-r-blue-500

    dark:border-t-emerald-400
    dark:border-r-emerald-400

    rotate-[42deg]

    shadow-[0_0_25px_rgba(59,130,246,0.25)]
    dark:shadow-[0_0_30px_rgba(16,185,129,0.2)]
  " />

  {/* Inner Circle */}
  <div className="
    absolute inset-[16px]

    rounded-full

    bg-background/40

    border border-border/20

    backdrop-blur-sm

    flex
    flex-col
    items-center
    justify-center
  ">

    <div className="
      text-5xl
      font-semibold

      tracking-tight

      text-foreground
    ">
      72
    </div>

    <div className="
      mt-1

      text-[10px]
      uppercase
      tracking-[0.35em]

      text-muted-foreground
    ">
      km/h
    </div>

  </div>

</div>


       {/* Right Side Cluster */}
<div className="
  flex-1

  h-full

  flex
  flex-col
  justify-between
">

  {/* Status Icons */}
  <div className="
    flex-1

    flex
    items-center
    justify-center

    gap-4

    flex-wrap
  ">

    {[
      {
        icon: BatteryChargingIcon,
        active: true,
      },

      {
        icon: Navigation,
        active: true,
      },

      {
        icon: BatteryCharging,
        active: false,
      },

      {
        icon: Waves,
        active: true,
      },

    ].map((item, idx) => {

      const Icon = item.icon;

      return (

        <button
          key={idx}
          className={`
            relative

            w-12 h-12

            rounded-2xl

            flex
            items-center
            justify-center

            transition-all
            duration-300

            ${
              item.active
                ? `
                  bg-blue-500/12
                  dark:bg-emerald-400/12

                  text-blue-500
                  dark:text-emerald-400

                  shadow-[0_0_18px_rgba(59,130,246,0.15)]
                  dark:shadow-[0_0_22px_rgba(16,185,129,0.15)]
                `
                : `
                  text-muted-foreground/50
                `
            }
          `}
        >

          <Icon className="
            w-5 h-5
          " />

        </button>

      );

    })}

  </div>

  {/* Gear Strip */}
  <div className="
    h-10

    rounded-2xl

    bg-background/30

    border border-border/20

    flex
    items-center
    justify-evenly

    backdrop-blur-sm
  ">

    {["P", "R", "N", "D"].map((gear) => (

      <div
        key={gear}
        className={`
          text-xs
          font-medium

          transition-all

          ${
            gear === "D"
              ? `
                text-blue-500
                dark:text-emerald-400

                scale-110
              `
              : `
                text-muted-foreground
              `
          }
        `}
      >
        {gear}
      </div>

    ))}

  </div>

</div>
</div>
</div>
  );

}