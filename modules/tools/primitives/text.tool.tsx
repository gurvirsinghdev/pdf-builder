import { TextCursorIcon, TypeIcon } from "lucide-react";
import type { Tool } from "./tool";

export const TextTool: Tool = {
  metadata: {
    id: "text-tool",
    name: "Text",
    icon: TypeIcon,
    cursor: TextCursorIcon,
  },
};
