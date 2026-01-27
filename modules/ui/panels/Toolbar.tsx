"use client";

import { cn } from "@/common/utils";
import {
  CircleIcon,
  Grid3x3Icon,
  GroupIcon,
  HandIcon,
  ImageIcon,
  LayoutTemplateIcon,
  MinusIcon,
  MinusSquareIcon,
  MousePointer2,
  SearchIcon,
  Shapes,
  ShapesIcon,
  SquareIcon,
  TableIcon,
  TypeIcon,
} from "lucide-react";
import { useState } from "react";

export default function Toolbar() {
  const [tools, setTools] = useState([
    // Movement
    {
      icon: MousePointer2,
      name: "Select",
      active: true,
    },
    { icon: HandIcon, name: "Pan" },
    { icon: SearchIcon, name: "Zoom" },

    // Layout
    { icon: GroupIcon, name: "Section" },
    { icon: LayoutTemplateIcon, name: "Container" },

    // Content
    { icon: TypeIcon, name: "Text" },
    { icon: ImageIcon, name: "Image" },
    { icon: TableIcon, name: "Table" },
    { icon: MinusSquareIcon, name: "Divider" },
    { icon: ShapesIcon, name: "Icon" },
  ]);

  const selectTool = function (toolName: (typeof tools)[number]["name"]) {
    setTools((tools) =>
      tools.map((tool) => {
        return {
          ...tool,
          active: tool.name == toolName,
        };
      }),
    );
  };

  return (
    <div className="flex w-16 flex-col items-center gap-1 border-r border-neutral-700 bg-neutral-900 py-4">
      {tools.map((tool, idx) => (
        <button
          key={idx}
          title={tool.name}
          onClick={() => selectTool(tool.name)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded transition-colors outline-none hover:cursor-pointer",
            tool.active
              ? "bg-purple-600/60 text-white"
              : "text-neutral-400 hover:bg-neutral-800 hover:text-white",
          )}
        >
          <tool.icon className="size-5" />
        </button>
      ))}
    </div>
  );
}
