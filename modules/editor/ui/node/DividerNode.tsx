"use client";

import type { DividerNode } from "../../types";
import { useSelectableNode } from "./useSelectableNode";
import { formatSpacing, resolveAutoSize } from "./styleUtils";

export default function DividerNodeComponent({
  divider: dividerNode,
}: {
  divider: DividerNode;
}) {
  const { wrapperProps } = useSelectableNode(dividerNode);

  const box = dividerNode.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width, "100%"),
    height: resolveAutoSize(box.height),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
  };

  const { type, color } = dividerNode.properties.divider;

  return (
    <div suppressHydrationWarning {...wrapperProps} style={boxStyle}>
      <hr
        className="border-0"
        style={{
          borderTopWidth: 1,
          borderTopStyle: type,
          borderTopColor: color,
        }}
      />
    </div>
  );
}
