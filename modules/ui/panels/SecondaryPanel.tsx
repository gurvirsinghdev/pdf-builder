import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from "lucide-react";

export default function SecondaryPanel() {
  return (
    <div className="flex w-72 flex-col overflow-y-auto border-l border-neutral-700 bg-neutral-800">
      <div className="border-b border-neutral-700 p-4">
        <h3 className="mb-1 text-sm font-semibold text-white">Properties</h3>
        <p className="text-xs text-neutral-400">Header</p>
      </div>

      <div className="space-y-6 p-4">
      </div>
    </div>
  );
}
