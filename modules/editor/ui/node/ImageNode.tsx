"use client";

import type { ImageNode } from "../../types";
import { useSelectableNode } from "./useSelectableNode";
import { formatBorder, formatSpacing, resolveAutoSize } from "./styleUtils";

export default function ImageNode({ image }: { image: ImageNode }) {
  const { wrapperProps } = useSelectableNode(image);

  const box = image.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width),
    height: resolveAutoSize(box.height),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
  };

  const { src, alt, fit, opacity } = image.properties.image;
  const imgStyle: React.CSSProperties = {
    objectFit: fit,
    opacity,
    width: "100%",
    height: "100%",
  };

  return (
    <div suppressHydrationWarning {...wrapperProps} style={boxStyle}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}
