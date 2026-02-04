"use client";

import { cn } from "@/common/utils";
import { PAPER_A4_HEIGHT, PAPER_A4_WIDTH } from "./constants";
import { useRef } from "react";

interface PaperProps {
  children: React.ReactNode;

  className?: string;
  fontClassName?: string;
}

export default function Paper({
  className,
  fontClassName,
  children,
}: PaperProps) {
  const paperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={paperRef}
      className={cn("relative bg-white shadow-2xl", fontClassName, className)}
      style={{
        width: `${PAPER_A4_WIDTH}px`,
        height: `${PAPER_A4_HEIGHT}px`,
      }}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
