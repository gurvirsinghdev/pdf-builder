import type {
  PrimitiveNode,
  TextNode as TextNodeType,
  ImageNode as ImageNodeType,
  TableNode as TableNodeType,
  DividerNode as DividerNodeType,
  IconNode as IconNodeType,
} from "../../documentStore";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import TableNodeComponent from "./TableNode";
import DividerNodeComponent from "./DividerNode";
import IconNodeComponent from "./IconNode";
import { nodeAction } from "../../utils";

export default function PrimitiveNode({
  primitive,
}: {
  primitive: PrimitiveNode;
}) {
  const action = nodeAction(primitive);
  return action({
    text: () => <TextNode text={primitive as TextNodeType} />,
    image: () => <ImageNode image={primitive as ImageNodeType} />,
    table: () => <TableNodeComponent table={primitive as TableNodeType} />,
    divider: () => (
      <DividerNodeComponent divider={primitive as DividerNodeType} />
    ),
    icon: () => <IconNodeComponent icon={primitive as IconNodeType} />,
    container: () => {
      throw new Error("Container nodes are not allowed here.");
    },
  });
}
