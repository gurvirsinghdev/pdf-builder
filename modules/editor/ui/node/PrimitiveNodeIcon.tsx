import { PrimitiveNode } from "../../types";
import { useMemo } from "react";
import { TextTool } from "@/modules/tools/primitives/text.tool";
import { ImageTool } from "@/modules/tools/primitives/image.tool";
import { TableTool } from "@/modules/tools/primitives/table.tool";
import { DividerTool } from "@/modules/tools/primitives/divider.tool";
import { IconTool } from "@/modules/tools/primitives/icon.tool";
import { ContainerTool } from "@/modules/tools/primitives/container.tool";
import { nodeAction } from "../../utils";

export default function PrimitiveNodeIcon({
  primitive,
  className,
}: {
  primitive: PrimitiveNode;
  className?: string;
}) {
  const Icon = useMemo(() => {
    const action = nodeAction(primitive);
    return action({
      text: () => TextTool.metadata.icon,
      image: () => ImageTool.metadata.icon,
      table: () => TableTool.metadata.icon,
      divider: () => DividerTool.metadata.icon,
      icon: () => IconTool.metadata.icon,
      container: () => ContainerTool.metadata.icon,
    });
  }, [primitive]);

  return <Icon className={className} />;
}
