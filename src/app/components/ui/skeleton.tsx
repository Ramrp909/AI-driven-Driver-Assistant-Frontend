import React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-slate-200 dark:bg-slate-700 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
}

/**
 * CardSkeleton - Loading skeleton for card components
 */
function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 p-6 space-y-4",
        className
      )}
    >
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Content */}
      <div className="space-y-3 mt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {/* Footer */}
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-16 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  );
}

/**
 * ChartSkeleton - Loading skeleton for charts
 */
function ChartSkeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 p-6 space-y-4",
        className
      )}
    >
      {/* Header */}
      <Skeleton className="h-6 w-1/3" />

      {/* Chart area */}
      <div className="space-y-3 h-64">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2 h-12">
            <Skeleton className="w-8 flex-shrink-0" />
            <Skeleton className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * LoadingSpinner - Circular loading indicator
 */
function LoadingSpinner({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size]}
          relative
          inline-flex
          items-center
          justify-center
        `}
      >
        <div
          className={`
            absolute
            inset-0
            rounded-full
            border-2
            border-slate-200 dark:border-slate-700
            border-t-cyan-500 dark:border-t-cyan-400
            animate-spin
          `}
        />
      </div>
    </div>
  );
}

/**
 * PulseLoader - Pulse animation loader
 */
function PulseLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`
            w-2 h-2 rounded-full bg-cyan-500
            animate-pulse
          `}
          style={{
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

export { Skeleton, CardSkeleton, ChartSkeleton, LoadingSpinner, PulseLoader };
