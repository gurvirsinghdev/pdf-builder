"use client";

/**
 * Placeholder document content (invoice template).
 * Replace with dynamic document tree when the editor supports it.
 */
export default function DefaultDocumentContent() {
  return (
    <div className="flex h-full flex-col p-12">
      <div className="mb-6 border-b-2 border-neutral-200 pb-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="h-16 w-16 rounded bg-linear-to-br from-blue-500 to-cyan-500" />
          <div className="text-right">
            <div className="mb-1 text-xs text-neutral-500">Invoice #</div>
            <div className="text-sm font-semibold">INV-2024-001</div>
          </div>
        </div>
        <h1 className="border-2 border-dashed border-blue-400 px-2 py-1 text-3xl font-bold text-neutral-800">
          INVOICE
        </h1>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-8">
        <div>
          <div className="mb-2 text-xs font-semibold text-neutral-500">
            FROM
          </div>
          <div className="text-sm text-neutral-700">
            <div className="font-semibold">Company Name</div>
            <div>123 Business St</div>
            <div>City, ST 12345</div>
          </div>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold text-neutral-500">TO</div>
          <div className="text-sm text-neutral-700">
            <div className="font-semibold">Client Name</div>
            <div>456 Client Ave</div>
            <div>City, ST 67890</div>
          </div>
        </div>
      </div>

      <div className="mb-8 flex-1 rounded border-2 border-dashed border-neutral-300 p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              <th className="py-2 text-left font-semibold text-neutral-600">
                Item
              </th>
              <th className="py-2 text-right font-semibold text-neutral-600">
                Qty
              </th>
              <th className="py-2 text-right font-semibold text-neutral-600">
                Rate
              </th>
              <th className="py-2 text-right font-semibold text-neutral-600">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-neutral-700">
            <tr className="border-b border-neutral-200">
              <td className="py-2">Service Item 1</td>
              <td className="text-right">1</td>
              <td className="text-right">$100.00</td>
              <td className="text-right">$100.00</td>
            </tr>
            <tr className="border-b border-neutral-200">
              <td className="py-2">Service Item 2</td>
              <td className="text-right">2</td>
              <td className="text-right">$75.00</td>
              <td className="text-right">$150.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4 flex justify-end">
        <div className="w-64">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-neutral-600">Subtotal:</span>
            <span className="font-semibold text-neutral-800">$250.00</span>
          </div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-neutral-600">Tax (10%):</span>
            <span className="font-semibold text-neutral-800">$25.00</span>
          </div>
          <div className="flex justify-between border-t-2 border-neutral-300 pt-2 text-base">
            <span className="font-semibold text-neutral-800">Total:</span>
            <span className="font-bold text-neutral-900">$275.00</span>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-neutral-200 pt-4">
        <div className="text-center text-xs text-neutral-500">
          Thank you for your business!
        </div>
      </div>
    </div>
  );
}
