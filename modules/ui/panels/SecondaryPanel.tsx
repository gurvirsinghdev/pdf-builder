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
        <p className="text-xs text-neutral-400">Invoice Title</p>
      </div>

      <div className="space-y-6 p-4">
        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Position
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">X</label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="48"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-500">Y</label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="72"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Width
              </label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="200"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Height
              </label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="48"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Text
          </label>
          <input
            type="text"
            className="mb-2 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
            defaultValue="INVOICE"
          />
          <div className="mb-3 flex gap-1">
            <button className="flex-1 rounded border border-neutral-700 bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">
              <Bold className="mx-auto h-4 w-4 text-neutral-400" />
            </button>
            <button className="flex-1 rounded border border-neutral-700 bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">
              <Italic className="mx-auto h-4 w-4 text-neutral-400" />
            </button>
            <button className="flex-1 rounded border border-neutral-700 bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">
              <Underline className="mx-auto h-4 w-4 text-neutral-400" />
            </button>
          </div>
          <div className="flex gap-1">
            <button className="flex-1 rounded border border-blue-500 bg-blue-600 p-2 transition-colors">
              <AlignLeft className="mx-auto h-4 w-4 text-white" />
            </button>
            <button className="flex-1 rounded border border-neutral-700 bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">
              <AlignCenter className="mx-auto h-4 w-4 text-neutral-400" />
            </button>
            <button className="flex-1 rounded border border-neutral-700 bg-neutral-900 p-2 transition-colors hover:bg-neutral-700">
              <AlignRight className="mx-auto h-4 w-4 text-neutral-400" />
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Font
          </label>
          <select className="mb-2 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none">
            <option>Inter</option>
            <option>Roboto</option>
            <option>Open Sans</option>
            <option>Lato</option>
          </select>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Size
              </label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="32"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Weight
              </label>
              <select className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none">
                <option>400</option>
                <option>500</option>
                <option>600</option>
                <option defaultChecked>700</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Color
          </label>
          <div className="flex gap-2">
            <input
              type="color"
              className="h-10 w-12 cursor-pointer rounded border border-neutral-700 bg-neutral-900"
              defaultValue="#1e293b"
            />
            <input
              type="text"
              className="flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
              defaultValue="#1e293b"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Opacity
          </label>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            className="w-full"
          />
          <div className="mt-1 text-right text-xs text-neutral-500">100%</div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            Border
          </label>
          <div className="mb-2 grid grid-cols-2 gap-2">
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Width
              </label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="2"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-500">
                Radius
              </label>
              <input
                type="number"
                className="w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                defaultValue="4"
              />
            </div>
          </div>
          <select className="mb-2 w-full rounded border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white focus:border-blue-500 focus:outline-none">
            <option>Solid</option>
            <option defaultChecked>Dashed</option>
            <option>Dotted</option>
          </select>
          <div className="flex gap-2">
            <input
              type="color"
              className="h-10 w-12 cursor-pointer rounded border border-neutral-700 bg-neutral-900"
              defaultValue="#3b82f6"
            />
            <input
              type="text"
              className="flex-1 rounded border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
              defaultValue="#3b82f6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
