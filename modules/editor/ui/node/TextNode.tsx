"use client";

import type { TextNode } from "../../documentStore";
import { useSelectableNode } from "./useSelectableNode";
import {
  formatBorder,
  formatSpacing,
  resolveAutoSize,
  resolveOverflow,
} from "./styleUtils";

export default function TextNode({ text }: { text: TextNode }) {
  const { wrapperProps } = useSelectableNode(text);

  const box = text.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width),
    height: resolveAutoSize(box.height),
    overflow: resolveOverflow(box.overflow),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
  };

  const content = text.properties.content;
  const textStyle: React.CSSProperties = {
    fontFamily: content.font.family,
    fontSize: content.font.size,
    fontWeight: content.font.weight,
    fontStyle: content.font.style,
    color: content.font.color,
    letterSpacing: content.letterSpacing,
    lineHeight: content.lineHeight,
    textAlign: content.text.align,
    textDecoration: content.text.decoration,
    textTransform: content.text.transform,
  };

  return (
    <div suppressHydrationWarning {...wrapperProps} style={boxStyle}>
      <p style={textStyle}>{text.content}</p>
    </div>
  );
}
