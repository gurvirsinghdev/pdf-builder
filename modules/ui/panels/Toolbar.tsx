"use client";

import { cn } from "@/common/utils";
import { useEditorStore } from "@/modules/editor/store";

export default function Toolbar() {
  const tools = useEditorStore((s) => s.tools);
  const selectedToolId = useEditorStore((s) => s.selectedToolId);
  const setSelectedToolId = useEditorStore((s) => s.setSelectedToolId);

  return (
    <div className="flex w-16 flex-col items-center gap-1 border-r border-neutral-700 bg-neutral-900 py-4">
      {tools.map((tool) => (
        <button
          key={tool.metadata.id}
          type="button"
          title={tool.metadata.name}
          onClick={() => setSelectedToolId(tool.metadata.id)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded transition-colors outline-none hover:cursor-pointer",
            tool.metadata.id === selectedToolId
              ? "bg-purple-600/60 text-white"
              : "text-neutral-400 hover:bg-neutral-800 hover:text-white",
          )}
        >
          <tool.metadata.icon className="size-5" />
        </button>
      ))}
    </div>
  );
}
