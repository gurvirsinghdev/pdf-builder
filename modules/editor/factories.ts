/**
 * Factory helpers for creating document nodes with sensible defaults.
 * Keeps initial state and future "add node" logic in one place.
 */

import { PAPER_A4_HEIGHT, PAPER_A4_WIDTH } from "../ui/panels/Canvas/constants";
import type {
  TextNode,
  TextNodeProperties,
  ContainerNode,
  PageNode,
  Spacing,
  BorderProperties,
  BoxProperties,
  BackgroundColor,
  BackgroundImage,
  ImageNode,
  TableNode,
  TableNodeProperties,
  DividerNode,
  DividerNodeProperties,
  IconNode,
  IconNodeProperties,
  ContainerNodeProperties,
} from "./types";

const createSpacing = (): Spacing => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

const createBorder = (): BorderProperties => ({
  width: 0,
  style: "solid",
  color: "transparent",
});

const createBoxDefaults = (): BoxProperties => ({
  width: "auto",
  height: "auto",
  spacing: {
    margin: createSpacing(),
    padding: createSpacing(),
    border: createBorder(),
  },
});

const createContainerBackground = (
  overrides: Partial<ContainerNodeProperties["box"]["background"]> = {},
): ContainerNodeProperties["box"]["background"] => {
  const resolvedType = overrides.type ?? "color";

  if (resolvedType === "image") {
    const {
      image = "",
      fit = "contain",
      opacity = 1,
    } = overrides as Partial<BackgroundImage>;
    return {
      type: "image",
      image,
      fit,
      opacity,
    };
  }

  const { color = "transparent", opacity = 1 } =
    overrides as Partial<BackgroundColor>;
  return {
    type: "color",
    color,
    opacity,
  };
};

const createTextProperties = (): TextNodeProperties => ({
  box: {
    ...createBoxDefaults(),
    overflow: { type: "expand" },
  },
  content: {
    font: {
      family: "inherit",
      color: "currentColor",
      size: 16,
      style: "normal",
      weight: 400,
    },
    letterSpacing: 0,
    lineHeight: 1.2,
    text: {
      align: "left",
      decoration: "none",
      transform: "none",
    },
  },
});

export function createTextNode(
  overrides: Partial<Pick<TextNode, "content" | "properties">> = {},
): TextNode {
  const { content = "", properties: propOverrides } = overrides;
  return {
    id: crypto.randomUUID(),
    type: "text",
    label: "Text",
    content,
    properties: {
      ...createTextProperties(),
      ...propOverrides,
    },
  };
}

export function createImageNode(
  overrides: Partial<Pick<ImageNode, "properties">> = {},
): ImageNode {
  const defaults = {
    box: {
      ...createBoxDefaults(),
      width: 100,
      height: 100,
    },
    image: {
      src: "https://placehold.co/100x100",
      alt: "",
      fit: "contain" as const,
      opacity: 1,
    },
  };
  return {
    id: crypto.randomUUID(),
    label: "Image",
    type: "image",
    properties: { ...defaults, ...overrides.properties },
  } satisfies ImageNode;
}

export function createTableNode(
  overrides: Partial<Pick<TableNode, "properties">> = {},
): TableNode {
  const tableProps: TableNodeProperties = {
    box: createBoxDefaults(),
    table: {
      columns: [],
      rows: [],
    },
  };
  return {
    id: crypto.randomUUID(),
    label: "Table",
    type: "table",
    properties: { ...tableProps, ...overrides.properties },
  };
}

export function createDividerNode(
  overrides: Partial<Pick<DividerNode, "properties">> = {},
): DividerNode {
  const props: DividerNodeProperties = {
    box: createBoxDefaults(),
    divider: {
      type: "solid",
      color: "currentColor",
    },
  };
  return {
    id: crypto.randomUUID(),
    label: "Divider",
    type: "divider",
    properties: { ...props, ...overrides.properties },
  };
}

export function createIconNode(
  overrides: Partial<Pick<IconNode, "properties">> = {},
): IconNode {
  const props: IconNodeProperties = {
    box: createBoxDefaults(),
    icon: {
      src: "",
      alt: "",
      opacity: 1,
    },
  };
  return {
    id: crypto.randomUUID(),
    label: "Icon",
    type: "icon",
    properties: { ...props, ...overrides.properties },
  };
}

export function createContainerNode(
  children: ContainerNode["children"] = [],
  overrides: Partial<ContainerNodeProperties["box"]> = {},
): ContainerNode {
  const { background: backgroundOverrides, ...boxOverrides } = overrides;
  const boxDefaults: ContainerNodeProperties["box"] = {
    ...createBoxDefaults(),
    background: createContainerBackground(backgroundOverrides),
  };
  return {
    id: crypto.randomUUID(),
    label: "Container",
    type: "container",
    children,
    properties: {
      box: {
        ...boxDefaults,
        ...boxOverrides,
      },
    },
  };
}

export function createPageNode(children: PageNode["children"] = []): PageNode {
  return {
    id: crypto.randomUUID(),
    children,
  };
}

export function createDefaultPage(): PageNode {
  const rootContainer = createContainerNode([], {
    width: PAPER_A4_WIDTH,
    height: PAPER_A4_HEIGHT,
  });
  rootContainer.label = "Page Container";
  return createPageNode([rootContainer]);
}
