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

      {/* Top Icons */}
      <div className="
        flex flex-col
        gap-5
      ">

        {items.map((item, index) => {

          const Icon = item.icon;

          return (

            <button
              key={index}
              data-active={item.active}
              className="
                relative
                w-10 h-10
                flex items-center
                justify-center
                transition-all
                duration-300

                text-muted-foreground

                hover:text-foreground

                data-[active=true]:text-blue-500
                dark:data-[active=true]:text-emerald-400
              "
            >

              {/* Active Side Indicator */}
              {item.active && (

                <div className="
                  absolute
                  -left-4
                  top-1/2
                  -translate-y-1/2
                  w-1 h-6
                  rounded-full
                  bg-blue-500
                  dark:bg-emerald-400
                " />

              )}

              <Icon className="
                w-5 h-5
              " />

            </button>

          );

        })}

      </div>

      {/* Bottom AI Core */}
      <div className="
        flex items-center
        justify-center
      ">

        <Brain className="
          w-6 h-6
          text-blue-500
          dark:text-emerald-400
        " />

      </div>

    </div>

  );

}