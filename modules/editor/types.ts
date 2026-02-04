/**
 * Document and node type definitions for the PDF editor.
 * Kept in a single module for consistency and easier evolution.
 */

export type PrimitiveNodeType = "text" | "image" | "table" | "divider" | "icon";
export type ContainerNodeType = "container";
export type NodeType = PrimitiveNodeType | ContainerNodeType;

export type ImageFit = "contain" | "cover" | "fill" | "none" | "scale-down";

export interface BoxSpacing {
  margin: Spacing;
  padding: Spacing;
  border: BorderProperties;
}

export interface BoxProperties {
  width: number | "auto";
  height: number | "auto";
  spacing: BoxSpacing;
}

export interface BorderProperties {
  width: number;
  style: BorderStyle;
  color: string;
}

export interface BasePrimitiveNode<TProperties> {
  id: string;
  label: string;
  type: PrimitiveNodeType;
  properties: TProperties;
}

export interface TextNodeProperties {
  box: {
    overflow:
      | { type: "expand" }
      | { type: "truncate"; ellipsis: string }
      | { type: "clip" };
  } & BoxProperties;
  content: {
    font: {
      size: number;
      family: string;
      weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
      color: string;
      style: "normal" | "italic" | "oblique";
    };
    lineHeight: number;
    letterSpacing: number;
    text: {
      align: "left" | "center" | "right" | "justify";
      decoration: "none" | "underline" | "overline" | "line-through";
      transform: "none" | "uppercase" | "lowercase" | "capitalize";
    };
  };
}

export interface TextNode extends BasePrimitiveNode<TextNodeProperties> {
  type: "text";
  content: string;
}

export interface ImageNodeProperties {
  box: BoxProperties;
  image: {
    src: string;
    alt: string;
    fit: ImageFit;
    opacity: number;
  };
}
export interface ImageNode extends BasePrimitiveNode<ImageNodeProperties> {
  type: "image";
}

export interface TableNodeProperties {
  box: BoxProperties;
  table: {
    columns: {
      width: number | "auto";
      header: {
        label: string;
        properties: TextNodeProperties;
      };
    }[];
    rows: {
      cells: {
        content: string;
        properties: TextNodeProperties;
      }[];
    }[];
  };
}
export interface TableNode extends BasePrimitiveNode<TableNodeProperties> {
  type: "table";
}

export interface DividerNodeProperties {
  box: BoxProperties;
  divider: {
    type:
      | "solid"
      | "dashed"
      | "dotted"
      | "double"
      | "groove"
      | "ridge"
      | "inset"
      | "outset";
    color: string;
  };
}
export interface DividerNode extends BasePrimitiveNode<DividerNodeProperties> {
  type: "divider";
}

export interface IconNodeProperties {
  box: BoxProperties;
  icon: {
    src: string;
    alt: string;
    opacity: number;
  };
}
export interface IconNode extends BasePrimitiveNode<IconNodeProperties> {
  type: "icon";
}

export type PrimitiveNode =
  | TextNode
  | ImageNode
  | TableNode
  | DividerNode
  | IconNode;

export interface ContainerNodeProperties {
  box: BoxProperties & {
    background: ContainerBackground;
  };
}

export type ContainerBackground = BackgroundColor | BackgroundImage;

export type BackgroundColor = {
  type: "color";
  color: string;
  opacity: number;
};

export type BackgroundImage = {
  type: "image";
  image: string;
  fit: ImageFit;
  opacity: number;
};

export interface ContainerNode {
  id: string;
  label: string;
  type: "container";
  properties: ContainerNodeProperties;
  children: (PrimitiveNode | ContainerNode)[];
}

export interface PageNode {
  id: string;
  children: ContainerNode[];
}

export interface DocumentStore {
  metadata: {
    fileName: string;
  };
  pages: PageNode[];
  addPage: () => void;
  currentPageIndex: number;
  setCurrentPageIndex: (pageIndex: number) => void;

  appendChild: (
    parentNodeId: ContainerNode["id"],
    childNode: PrimitiveNode | ContainerNode,
  ) => void;
}

/** Shared shape for padding/margin (top, right, bottom, left). */
export interface Spacing {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type BorderStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";
