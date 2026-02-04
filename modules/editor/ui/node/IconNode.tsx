"use client";

import type { IconNode } from "../../types";
import { useSelectableNode } from "./useSelectableNode";
import { formatBorder, formatSpacing, resolveAutoSize } from "./styleUtils";

export default function IconNodeComponent({
  icon: iconNode,
}: {
  icon: IconNode;
}) {
  const { wrapperProps } = useSelectableNode(iconNode);

  const box = iconNode.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width),
    height: resolveAutoSize(box.height),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const { src, alt, opacity } = iconNode.properties.icon;

  return (
    <div suppressHydrationWarning {...wrapperProps} style={boxStyle}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "contain", opacity }}
      />
    </div>
  );
}
