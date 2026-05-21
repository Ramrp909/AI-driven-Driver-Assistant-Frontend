import * as React from "react";

import { cn } from "./utils";

type CardVariant = 'elevated' | 'prominent' | 'interactive' | 'default';

interface CardProps extends React.ComponentProps<"div"> {
  variant?: CardVariant;
  interactive?: boolean;
}

function Card({
  className,
  variant = 'default',
  interactive = false,
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    elevated: 'shadow-[0_4px_20px_rgba(59,130,246,0.1)] dark:shadow-[0_4px_20px_rgba(16,185,129,0.06)]',
    prominent: 'shadow-[0_8px_32px_rgba(59,130,246,0.15)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.1)]',
    interactive: 'shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]',
    default: 'shadow-[0_4px_20px_rgba(59,130,246,0.06)] dark:shadow-[0_8px_30px_rgba(16,185,129,0.06)]',
  };

  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-all duration-300",
        variantStyles[variant],
        interactive && 'cursor-pointer hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)] hover:border-cyan-500/30 dark:hover:border-cyan-500/20',
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <h4
      data-slot="card-title"
      className={cn("leading-none", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 [&:last-child]:pb-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
