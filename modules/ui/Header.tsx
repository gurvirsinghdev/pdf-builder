"use client";

import {
  EyeIcon,
  RedoIcon,
  Share2Icon,
  UndoIcon,
  UploadIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [fileName, setFileName] = useState<string>("Untitled");
  const [fileInputState, setFileInputState] = useState<"readonly" | "editable">(
    "readonly",
  );

  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4">
      <div>
        {fileInputState === "readonly" ? (
          <>
            <span
              title="Double click to rename template"
              onDoubleClick={() =>
                setFileInputState((state) =>
                  state === "editable" ? "readonly" : "editable",
                )
              }
              className="text-white"
            >
              {fileName}
            </span>
            <span className="pointer-events-none text-neutral-400">.pdf</span>
          </>
        ) : (
          <input
            autoFocus
            value={fileName}
            className="w-max border-b border-neutral-700 text-white outline-none"
            onChange={(e) => setFileName(e.target.value)}
            onBlur={() => setFileInputState("readonly")}
            onKeyUp={(e) => {
              if (e.key == "Enter") setFileInputState("readonly");
            }}
          />
        )}
      </div>

      <div className="flex items-center gap-2">
        {[{ icon: EyeIcon, title: "Publish Template" }].map((item, idx) => (
          <button
            key={idx}
            title={item.title}
            className="cursor-pointer rounded p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <item.icon className="size-4" />
          </button>
        ))}
      </div>
    </header>
  );
}
