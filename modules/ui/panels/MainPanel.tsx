"use client";

import { useState } from "react";
import { Eye, FileTextIcon, LayersIcon, Plus } from "lucide-react";
import { cn } from "@/common/utils";
import {
  ContainerNode,
  PrimitiveNode,
  useDocumentStore,
} from "@/modules/editor/documentStore";
import { useEditorStore } from "@/modules/editor/store";
import PrimitiveNodeIcon from "@/modules/editor/ui/node/PrimitiveNodeIcon";
import { SelectTool } from "@/modules/tools/primitives/select.tool";

function LayerItems({
  items,
  depth,
}: {
  items: (ContainerNode | PrimitiveNode)[];
  depth: number;
}) {
  const setSelectedToolId = useEditorStore((s) => s.setSelectedToolId);
  const selectedNodeId = useEditorStore((s) => s.selectedNodeId);
  const selectedToolId = useEditorStore((s) => s.selectedToolId);
  const setSelectedNodeId = useEditorStore((s) => s.setSelectedNodeId);
  const pushHoveredNodeId = useEditorStore((s) => s.pushHoveredNodeId);
  const popHoveredNodeId = useEditorStore((s) => s.popHoveredNodeId);

  return items.map((item, idx) => (
    <div key={idx} className="flex w-full flex-col items-start">
      <div
        onClick={() => {
          setSelectedToolId(SelectTool.metadata.id);
          setSelectedNodeId(item.id);
        }}
        onMouseEnter={() => {
          if (selectedToolId === SelectTool.metadata.id) {
            pushHoveredNodeId(item.id);
          }
        }}
        onMouseLeave={() => popHoveredNodeId(item.id)}
        className={cn(
          "group flex h-8 w-full items-center gap-1 hover:cursor-pointer hover:bg-neutral-700",
          selectedNodeId === item.id ? "bg-neutral-700" : "",
        )}
      >
        {depth > 0 && (
          <div
            className={cn(
              "h-8 border-l-2 border-l-neutral-700 pr-2 group-hover:border-l-neutral-600",
            )}
            style={{ width: "1px" }}
          />
        )}
        <PrimitiveNodeIcon
          primitive={item as PrimitiveNode}
          className={cn("size-4 text-neutral-400", depth == 0 && "ml-2")}
        />
        <span className="flex-1 truncate text-sm text-neutral-200">
          {item.label}
        </span>
        <Eye className="mr-2 h-3.5 w-3.5 text-neutral-500 opacity-0 group-hover:opacity-100" />
      </div>

      {"children" in item && item.children && (
        <div className="w-full py-2 pl-4">
          <LayerItems items={item.children} depth={depth + 1} />
        </div>
      )}
    </div>
  ));
}

export default function MainPanel() {
  const [activeTab, setActiveTab] = useState<"layers" | "pages">("layers");

  const documentState = useDocumentStore();

  return (
    <div className="flex w-64 max-w-64 min-w-64 flex-col border-r border-neutral-700 bg-neutral-800">
      <div className="flex border-b border-neutral-700">
        {(
          [
            { icon: LayersIcon, label: "layers" },
            { icon: FileTextIcon, label: "pages" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.label}
            className={`flex-1 py-3 text-sm font-medium transition-colors outline-none hover:cursor-pointer ${
              activeTab === tab.label
                ? "border-b-2 border-purple-500/60 bg-neutral-900 text-white"
                : "text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center justify-center gap-2">
              <tab.icon className="size-4" />
              <span className="capitalize">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {activeTab === "layers" && (
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 pb-16">
            {documentState.pages.map((page, idx) => (
              <LayerItems key={idx} items={page.children} depth={0} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "pages" && (
        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-2 pb-[25%]">
            {documentState.pages.map((page, idx) => (
              <div
                key={page.id}
                onClick={() => documentState.setCurrentPageIndex(idx)}
                className={cn(
                  "cursor-pointer rounded-lg border-2 p-3",
                  documentState.currentPageIndex === idx
                    ? "border-purple-500 bg-purple-600/20"
                    : "border-transparent bg-neutral-700/50 hover:border-neutral-600",
                )}
              >
                <div className="mb-2 aspect-[8.5/11] rounded bg-white shadow-sm"></div>
                <div className="text-center text-xs text-neutral-200">
                  Page {idx + 1}
                </div>
              </div>
            ))}

            <button
              onClick={documentState.addPage}
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-600 p-4 text-neutral-400 transition-colors hover:cursor-pointer hover:border-neutral-500 hover:text-neutral-300"
            >
              <Plus className="size-4" />
              <span className="text-sm">Add Page</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
