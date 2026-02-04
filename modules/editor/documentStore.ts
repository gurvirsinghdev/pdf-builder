import { create } from "zustand";
import type { ContainerNode, DocumentStore, PrimitiveNode } from "./types";
import { createDefaultPage, createPageNode } from "./factories";

// Re-export types so existing imports from documentStore keep working
export type {
  PrimitiveNodeType,
  BasePrimitiveNode,
  TextNodeProperties,
  TextNode,
  ImageNode,
  TableNode,
  DividerNode,
  IconNode,
  PrimitiveNode,
  ContainerNode,
  PageNode,
  DocumentStore,
} from "./types";

export const useDocumentStore = create<DocumentStore>((set) => ({
  metadata: {
    fileName: "Untitled",
  },

  addPage: () =>
    set((state) => ({
      pages: [...state.pages, createPageNode()],
    })),

  currentPageIndex: 0,
  setCurrentPageIndex: (pageIndex) => set({ currentPageIndex: pageIndex }),

  pages: [createDefaultPage()],

  appendChild: (parentNodeId, childNode) => {
    set((state) => {
      const appendToChildNodes = (
        nodes: (PrimitiveNode | ContainerNode)[],
      ): (PrimitiveNode | ContainerNode)[] =>
        nodes.map((node) => {
          if (!("children" in node)) {
            return node;
          }

          if (node.id === parentNodeId) {
            return {
              ...node,
              children: [...node.children, childNode],
            };
          }

          return {
            ...node,
            children: appendToChildNodes(node.children),
          };
        });

      const appendToContainerNodes = (
        nodes: ContainerNode[],
      ): ContainerNode[] =>
        nodes.map((node) => {
          if (node.id === parentNodeId) {
            return {
              ...node,
              children: [...node.children, childNode],
            };
          }

          return {
            ...node,
            children: appendToChildNodes(node.children),
          };
        });

      return {
        pages: state.pages.map((page) => ({
          ...page,
          children: appendToContainerNodes(page.children),
        })),
      };
    });
  },
}));
