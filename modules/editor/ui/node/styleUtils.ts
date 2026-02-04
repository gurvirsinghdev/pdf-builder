import type {
  BorderProperties,
  BoxProperties,
  ContainerNodeProperties,
  Spacing,
  TextNodeProperties,
} from "../../types";

export function formatSpacing(spacing: Spacing) {
  return `${spacing.top}px ${spacing.right}px ${spacing.bottom}px ${spacing.left}px`;
}

export function formatBorder(border: BorderProperties) {
  return `${border.width}px ${border.style} ${border.color}`;
}

export function resolveAutoSize(
  value: BoxProperties["width"],
  autoValue?: string,
) {
  return value === "auto" ? autoValue : value;
}

export function resolveOverflow(
  overflow: TextNodeProperties["box"]["overflow"],
) {
  return overflow.type === "expand" ? "visible" : "hidden";
}

export function formatBackground(box: ContainerNodeProperties["box"]) {
  if (box.background.type === "color") {
    return box.background.color;
  }

  return `url(${box.background.image}) ${box.background.fit}`;
}
