import { Tool } from "../tools/primitives/tool";
import { ContainerNode, NodeType, PrimitiveNode } from "./types";

export function nodeAction(node: PrimitiveNode | ContainerNode) {
  if (!("type" in node)) {
    throw new Error("Node provided is not a primitive or container node.");
  }

  return <TReturn extends any>(action: Record<NodeType, () => TReturn>) => {
    return action[node.type]();
  };
}

export function toolAction(toolId: string) {
  return <TReturn extends any>(
    action: Record<Tool["metadata"]["id"], () => TReturn>,
  ) => {
    return action[toolId]();
  };
}
