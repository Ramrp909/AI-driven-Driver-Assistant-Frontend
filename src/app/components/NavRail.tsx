import {
  LayoutDashboard,
  Navigation,
  Camera,
  Car,
  Settings,
  Brain,
} from "lucide-react";

const items = [

  {
    icon: LayoutDashboard,
    active: true,
  },

  {
    icon: Navigation,
  },

  {
    icon: Brain,
  },

  {
    icon: Camera,
  },

  {
    icon: Car,
  },

  {
    icon: Settings,
  },

];

export default function NavRail() {

  return (

    <div className="
      h-full
      flex flex-col
      items-center
      justify-between
      py-4
    ">

      {/* Top */}
      <div className="
        flex flex-col
        gap-3
      ">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (

            <button
              key={index}
              className={`
                relative
                w-14 h-14
                rounded-[22px]
                flex items-center
                justify-center
                transition-all
                duration-300

                ${
                  item.active
                    ? `
                      bg-cyan-500/20
                      border border-cyan-400/40
                      shadow-[0_0_25px_rgba(34,211,238,0.18)]
                    `
                    : `
                      bg-slate-800/80
                      border border-slate-700
                      hover:border-cyan-400/30
                    `
                }
              `}
            >

              {/* Active Glow */}
              {item.active && (

                <div className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2
                  w-1 h-8
                  rounded-full
                  bg-cyan-400
                " />

              )}

              <Icon
                className={`
                  w-5 h-5

                  ${
                    item.active
                      ? "text-cyan-300"
                      : "text-slate-400"
                  }
                `}
              />

            </button>

          );

        })}

      </div>

      {/* Bottom AI Core */}
      <div className="
        w-14 h-14
        rounded-[22px]
        bg-gradient-to-br
        from-cyan-500
        to-blue-600
        flex items-center
        justify-center
        shadow-[0_0_30px_rgba(34,211,238,0.3)]
      ">

        <Brain className="
          w-6 h-6
          text-white
        " />

      </div>

    </div>

  );

}