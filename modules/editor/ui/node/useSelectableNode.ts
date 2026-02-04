import React, { useCallback } from "react";
import { cn } from "@/common/utils";
import { SelectTool } from "@/modules/tools/primitives/select.tool";
import { useEditorStore } from "../../store";
import type { ContainerNode, PrimitiveNode } from "../../types";
import { toolAction } from "../../utils";
import { TextTool } from "@/modules/tools/primitives/text.tool";
import { useDocumentStore } from "../../documentStore";
import {
  createContainerNode,
  createDividerNode,
  createIconNode,
  createImageNode,
  createTableNode,
  createTextNode,
} from "../../factories";
import { ImageTool } from "@/modules/tools/primitives/image.tool";
import { TableTool } from "@/modules/tools/primitives/table.tool";
import { DividerTool } from "@/modules/tools/primitives/divider.tool";
import { IconTool } from "@/modules/tools/primitives/icon.tool";
import { ContainerTool } from "@/modules/tools/primitives/container.tool";

export function useSelectableNode(node: ContainerNode | PrimitiveNode) {
  const pushHoveredNodeId = useEditorStore((s) => s.pushHoveredNodeId);
  const popHoveredNodeId = useEditorStore((s) => s.popHoveredNodeId);
  const hoveredNodeId = useEditorStore((s) => s.hoveredNodePath.at(-1));

  const activeToolId = useEditorStore((s) => s.selectedToolId);
  const setSelectedToolId = useEditorStore((s) => s.setSelectedToolId);
  const selectedNodeId = useEditorStore((s) => s.selectedNodeId);
  const setSelectedNodeId = useEditorStore((s) => s.setSelectedNodeId);

  const appendChild = useDocumentStore((s) => s.appendChild);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!activeToolId) return;

      toolAction(activeToolId)({
        [SelectTool.metadata.id]: () => setSelectedNodeId(node.id),
        [TextTool.metadata.id]: () => {
          appendChild(node.id, createTextNode({ content: "Hello, World!" }));
          setSelectedToolId(SelectTool.metadata.id);
        },
        [ImageTool.metadata.id]: () => {
          appendChild(node.id, createImageNode());
          setSelectedToolId(SelectTool.metadata.id);
        },
        [TableTool.metadata.id]: () => {
          appendChild(node.id, createTableNode());
          setSelectedToolId(SelectTool.metadata.id);
        },
        [DividerTool.metadata.id]: () => {
          appendChild(node.id, createDividerNode());
          setSelectedToolId(SelectTool.metadata.id);
        },
        [IconTool.metadata.id]: () => {
          appendChild(node.id, createIconNode());
          setSelectedToolId(SelectTool.metadata.id);
        },
        [ContainerTool.metadata.id]: () => {
          appendChild(node.id, createContainerNode([]));
          setSelectedToolId(SelectTool.metadata.id);
        },
      });
    },
    [activeToolId, node.id, setSelectedNodeId],
  );

  const onMouseEnter = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      pushHoveredNodeId(node.id);
    },
    [node.id, pushHoveredNodeId],
  );

  const onMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      popHoveredNodeId(node.id);
    },
    [node.id, popHoveredNodeId],
  );

  return {
    wrapperProps: {
      "data-id": node.id,
      className: cn(
        "border-2! border-transparent!",
        hoveredNodeId === node.id && "border-purple-600!",
        selectedNodeId === node.id && "border-purple-600!",
      ),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
    },
  };
}
