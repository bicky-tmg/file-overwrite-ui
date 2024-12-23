import OverwriteDialog from "@/components/OverwriteDialog";
import { files } from "./constants/data";
import { useState } from "react";

function App() {
  const [isOverwriteOpen, setIsOverwriteOpen] = useState(false);

  const handleOverwriteOpenState = (state: boolean) => {
    setIsOverwriteOpen(state);
  };

  const handleOverwrite = () => {
    console.log("Trigger Overwrite: STARTING POINT");
    files.forEach((file) => {
      console.log(file);
    });
  };

  return (
    <main className="container py-16 mx-auto">
      <h1 className="text-center text-2xl font-bold mb-10">File Overwrite</h1>
      <OverwriteDialog
        isOpen={isOverwriteOpen}
        onOpenChange={handleOverwriteOpenState}
        handleOverwrite={handleOverwrite}
      />
    </main>
  );
}

export default App;
