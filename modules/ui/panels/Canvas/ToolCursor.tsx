"use client";

import type { LucideIcon } from "lucide-react";
import React from "react";

interface ToolCursorProps {
  CursorIcon: React.ElementType;
  x: number;
  y: number;
}

export default function ToolCursor({ CursorIcon, x, y }: ToolCursorProps) {
  return (
    <div className="pointer-events-none absolute" style={{ top: y, left: x }}>
      <CursorIcon className="size-5 text-black" />
    </div>
  );
}
