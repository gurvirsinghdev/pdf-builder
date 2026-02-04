"use client";

import { ZoomIn, ZoomOut } from "lucide-react";

export default function CanvasHeader() {
  return (
    <header className="flex h-12 items-center justify-between border-b-2 border-neutral-700 bg-neutral-800 px-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-neutral-400">Canvas</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded p-1.5 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="w-16 text-center text-sm text-neutral-300">
          100%
        </span>
        <button
          type="button"
          className="rounded p-1.5 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
