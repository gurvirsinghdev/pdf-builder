"use client";

import { Poppins } from "next/font/google";
import { useDocumentStore } from "@/modules/editor/documentStore";
import ContainerNode from "@/modules/editor/ui/node/ContainerNode";
import CanvasHeader from "./CanvasHeader";
import Paper from "./Paper";

const paperFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Canvas() {
  const documentState = useDocumentStore();

  return (
    <div className="flex flex-1 flex-col bg-neutral-700">
      <CanvasHeader />

      <div className="flex-1 overflow-auto p-8">
        <div className="flex min-h-full flex-col items-center justify-center gap-8 pb-16">
          {documentState.pages.map((page) => (
            <Paper key={page.id} fontClassName={paperFont.className}>
              {page.children.map((container) => (
                <ContainerNode key={container.id} container={container} />
              ))}
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
}
