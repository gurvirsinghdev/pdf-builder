import Header from "@/modules/ui/Header";
import Canvas from "@/modules/ui/panels/Canvas";
import MainPanel from "@/modules/ui/panels/MainPanel";
import SecondaryPanel from "@/modules/ui/panels/SecondaryPanel";
import Toolbar from "@/modules/ui/panels/Toolbar";

export default function EditorPage() {
  return (
    <main className="h-screen max-h-screen min-h-screen w-screen overflow-hidden">
      <Header />

      <div className="flex h-full flex-1 overflow-hidden">
        <Toolbar />
        <MainPanel />
        <Canvas />
        <SecondaryPanel />
      </div>
    </main>
  );
}
