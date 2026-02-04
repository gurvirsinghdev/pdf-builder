"use client";

import { EyeIcon } from "lucide-react";
import { useDocumentStore } from "../editor/documentStore";

export default function Header() {
  const documentState = useDocumentStore();

  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-700 bg-neutral-900 px-4">
      <div>
        <span title="Double click to rename template" className="text-white">
          {documentState.metadata.fileName}
        </span>
        <span className="pointer-events-none text-neutral-400">.pdf</span>
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
