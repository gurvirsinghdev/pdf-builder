"use client";

import type {
  ContainerNode,
  PrimitiveNode as PrimitiveNodeType,
} from "../../documentStore";
import { useSelectableNode } from "./useSelectableNode";
import PrimitiveNode from "./PrimitiveNode";
import { cn } from "@/common/utils";
import {
  formatBackground,
  formatBorder,
  formatSpacing,
  resolveAutoSize,
} from "./styleUtils";

export default function ContainerNode({
  container,
}: {
  container: ContainerNode;
}) {
  const { wrapperProps } = useSelectableNode(container);

  const box = container.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width),
    height: resolveAutoSize(box.height),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
    background: formatBackground(box),
    opacity: box.background.opacity,
  };

  return (
    <div
      suppressHydrationWarning
      {...wrapperProps}
      className={cn(wrapperProps.className)}
      style={boxStyle}
    >
      {container.children.map((node) =>
        "children" in node ? (
          <ContainerNode key={node.id} container={node as ContainerNode} />
        ) : (
          <PrimitiveNode key={node.id} primitive={node as PrimitiveNodeType} />
        ),
      )}
    </div>
  );
}
