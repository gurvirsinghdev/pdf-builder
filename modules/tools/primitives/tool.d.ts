import { LucideIcon } from "lucide-react";
import React from "react";

export interface ToolMetadata {
  id: string;
  name: string;
  icon: LucideIcon;
  cursor?: React.ElementType;
}

export interface Tool {
  metadata: ToolMetadata;
}
