"use client";

import React from "react";
import type { TableNode } from "../../types";
import { useSelectableNode } from "./useSelectableNode";
import {
  formatBorder,
  formatSpacing,
  resolveAutoSize,
  resolveOverflow,
} from "./styleUtils";

function cellStyleFromTextProperties(
  props: TableNode["properties"]["table"]["rows"][0]["cells"][0]["properties"],
): React.CSSProperties {
  const { box, content } = props;

  const boxStyle: React.CSSProperties = {
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
    width: resolveAutoSize(box.width),
    height: resolveAutoSize(box.height),
    overflow: resolveOverflow(box.overflow),
  };

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

  return {
    ...boxStyle,
    ...textStyle,
  };
}

export default function TableNodeComponent({ table }: { table: TableNode }) {
  const { wrapperProps } = useSelectableNode(table);

  const box = table.properties.box;
  const boxStyle: React.CSSProperties = {
    width: resolveAutoSize(box.width, "100%"),
    height: resolveAutoSize(box.height),
    margin: formatSpacing(box.spacing.margin),
    padding: formatSpacing(box.spacing.padding),
    border: formatBorder(box.spacing.border),
  };

  const { columns, rows } = table.properties.table;

  return (
    <div
      data-table-node
      suppressHydrationWarning
      {...wrapperProps}
      style={boxStyle}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            {columns.map((col, i) => (
              <th
                key={i}
                style={{
                  width: col.width === "auto" ? undefined : col.width,
                  ...cellStyleFromTextProperties(col.header.properties),
                }}
              >
                {col.header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-neutral-200">
              {row.cells.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  style={{
                    ...cellStyleFromTextProperties(cell.properties),
                  }}
                >
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
