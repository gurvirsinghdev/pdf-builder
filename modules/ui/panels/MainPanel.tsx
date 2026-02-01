"use client";

import { cn } from "@/common/utils";
import {
  Plus,
  Eye,
  LayersIcon,
  FileTextIcon,
  GroupIcon,
  ShapesIcon,
  TypeIcon,
  LayoutTemplateIcon,
  LucideIcon,
  TableIcon,
} from "lucide-react";
import { useState } from "react";

type LevelItem = {
  icon: LucideIcon;
  label: string;
  children?: LevelItem[];
};

type Level = LevelItem[];

const rootLevel: Level = [
  {
    icon: GroupIcon,
    label: "Header",
    children: [
      {
        icon: ShapesIcon,
        label: "Logo",
      },
      {
        icon: GroupIcon,
        label: "Invoice Details Group",
        children: [
          {
            icon: TypeIcon,
            label: "Invoice # Label",
          },
          {
            icon: TypeIcon,
            label: "INV-2024-001",
          },
        ],
      },
      {
        icon: LayoutTemplateIcon,
        label: "Invoice Title Container",
        children: [
          {
            icon: TypeIcon,
            label: "INVOICE",
          },
        ],
      },
    ],
  },

  {
    icon: GroupIcon,
    label: "Address Section",
    children: [
      {
        icon: GroupIcon,
        label: "From Block",
        children: [
          {
            icon: TypeIcon,
            label: "FROM Label",
          },
          {
            icon: TypeIcon,
            label: "Company Name",
          },
          {
            icon: TypeIcon,
            label: "Street Address",
          },
          {
            icon: TypeIcon,
            label: "City, State, ZIP",
          },
        ],
      },
      {
        icon: GroupIcon,
        label: "To Block",
        children: [
          {
            icon: TypeIcon,
            label: "TO Label",
          },
          {
            icon: TypeIcon,
            label: "Client Name",
          },
          {
            icon: TypeIcon,
            label: "Street Address",
          },
          {
            icon: TypeIcon,
            label: "City, State, ZIP",
          },
        ],
      },
    ],
  },

  {
    icon: GroupIcon,
    label: "Items Table Section",
    children: [
      {
        icon: TableIcon,
        label: "Items Table",
        children: [
          {
            icon: GroupIcon,
            label: "Table Header",
            children: [
              { icon: TypeIcon, label: "Item" },
              { icon: TypeIcon, label: "Qty" },
              { icon: TypeIcon, label: "Rate" },
              { icon: TypeIcon, label: "Amount" },
            ],
          },
          {
            icon: GroupIcon,
            label: "Row: Service Item 1",
            children: [
              { icon: TypeIcon, label: "Service Item 1" },
              { icon: TypeIcon, label: "1" },
              { icon: TypeIcon, label: "$100.00" },
              { icon: TypeIcon, label: "$100.00" },
            ],
          },
          {
            icon: GroupIcon,
            label: "Row: Service Item 2",
            children: [
              { icon: TypeIcon, label: "Service Item 2" },
              { icon: TypeIcon, label: "2" },
              { icon: TypeIcon, label: "$75.00" },
              { icon: TypeIcon, label: "$150.00" },
            ],
          },
        ],
      },
    ],
  },

  {
    icon: GroupIcon,
    label: "Totals Section",
    children: [
      {
        icon: GroupIcon,
        label: "Subtotal Row",
        children: [
          { icon: TypeIcon, label: "Subtotal Label" },
          { icon: TypeIcon, label: "$250.00" },
        ],
      },
      {
        icon: GroupIcon,
        label: "Tax Row",
        children: [
          { icon: TypeIcon, label: "Tax (10%) Label" },
          { icon: TypeIcon, label: "$25.00" },
        ],
      },
      {
        icon: GroupIcon,
        label: "Total Row",
        children: [
          { icon: TypeIcon, label: "Total Label" },
          { icon: TypeIcon, label: "$275.00" },
        ],
      },
    ],
  },

  {
    icon: GroupIcon,
    label: "Footer",
    children: [
      {
        icon: TypeIcon,
        label: "Thank you message",
      },
    ],
  },
];

function LayerItem({ item, depth }: { item: LevelItem; depth: number }) {
  const Icon = item.icon;

  return (
    <div className="flex w-full flex-col items-start">
      <div className="group flex h-8 w-full items-center gap-1 hover:cursor-pointer hover:bg-neutral-700">
        {depth > 0 && (
          <div
            className={cn(
              "h-8 border-l-2 border-l-neutral-700 pr-2 group-hover:border-l-neutral-600",
            )}
            style={{ width: "1px" }}
          />
        )}
        <Icon className={cn("size-4 text-neutral-400", depth == 0 && "ml-2")} />
        <span className="flex-1 truncate text-sm text-neutral-200">
          {item.label}
        </span>
        <Eye className="mr-2 h-3.5 w-3.5 text-neutral-500 opacity-0 group-hover:opacity-100" />
      </div>

      {item.children && (
        <div className="w-full py-2 pl-4">
          {item.children.map((child, idx) => (
            <LayerItem key={idx} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MainPanel() {
  const [activeTab, setActiveTab] = useState<"layers" | "pages">("layers");
  const [pages, setPages] = useState<number[]>([1]);
  const [selectedPageNumber, setSelectedPageNumber] = useState<number>(1);

  return (
    <div className="flex min-w-64 max-w-64 w-64 flex-col border-r border-neutral-700 bg-neutral-800">
      <div className="flex border-b border-neutral-700">
        {(
          [
            { icon: LayersIcon, label: "layers" },
            { icon: FileTextIcon, label: "pages" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.label}
            className={`flex-1 py-3 text-sm font-medium transition-colors outline-none hover:cursor-pointer ${
              activeTab === tab.label
                ? "border-b-2 border-purple-500/60 bg-neutral-900 text-white"
                : "text-neutral-400 hover:bg-neutral-700 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <div className="flex items-center justify-center gap-2">
              <tab.icon className="size-4" />
              <span className="capitalize">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {activeTab === "layers" && (
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 pb-16">
            {rootLevel.map((item, idx) => (
              <LayerItem key={idx} item={item} depth={0} />
            ))}
          </div>
        </div>
      )}

      {activeTab === "pages" && (
        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-2 pb-[25%]">
            {pages.map((pageNumber) => (
              <div
                key={pageNumber}
                onClick={() => setSelectedPageNumber(pageNumber)}
                className={cn(
                  "cursor-pointer rounded-lg border-2 p-3",
                  pageNumber == selectedPageNumber
                    ? "border-purple-500 bg-purple-600/20"
                    : "border-transparent bg-neutral-700/50 hover:border-neutral-600",
                )}
              >
                <div className="mb-2 aspect-[8.5/11] rounded bg-white shadow-sm"></div>
                <div className="text-center text-xs text-neutral-200">
                  Page {pageNumber}
                </div>
              </div>
            ))}

            <button
              onClick={() =>
                setPages((prev) => [...prev, prev[prev.length - 1] + 1])
              }
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-neutral-600 p-4 text-neutral-400 transition-colors hover:cursor-pointer hover:border-neutral-500 hover:text-neutral-300"
            >
              <Plus className="size-4" />
              <span className="text-sm">Add Page</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
