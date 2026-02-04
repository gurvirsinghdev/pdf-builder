import { create } from "zustand";
import { tools } from "@/modules/tools";
import type { Tool } from "@/modules/tools/primitives/tool";
import { SelectTool } from "../tools/primitives/select.tool";

export interface EditorState {
  tools: Tool[];
  selectedToolId: string | null;
  setSelectedToolId: (toolId: string | null) => void;

  hoveredNodePath: string[];
  pushHoveredNodeId: (id: string) => void;
  popHoveredNodeId: (id: string) => void;
  selectedNodeId: string | null;
  setSelectedNodeId: (id: string | null) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  tools,
  selectedToolId: SelectTool.metadata.id,
  setSelectedToolId: (toolId) =>
    set({ selectedToolId: toolId, hoveredNodePath: [] }),

  hoveredNodePath: [],
  pushHoveredNodeId: (id) =>
    set((state) => {
      if (state.hoveredNodePath[state.hoveredNodePath.length - 1] === id) {
        return state;
      }
      return { hoveredNodePath: [...state.hoveredNodePath, id] };
    }),
  popHoveredNodeId: (id) =>
    set((state) => {
      if (state.hoveredNodePath[state.hoveredNodePath.length - 1] !== id) {
        return state;
      }
      return { hoveredNodePath: state.hoveredNodePath.slice(0, -1) };
    }),
  selectedNodeId: null,
  setSelectedNodeId: (id) => set({ selectedNodeId: id }),
}));
