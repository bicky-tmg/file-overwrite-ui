import OverwriteDialog from "@/components/OverwriteDialog";
import { files } from "@/constants/data";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import {
  FilesWithSelectedOptionType,
  IFile,
  OverwriteOptionsEnum,
  ResolveCallbackType,
} from "@/types/types";

function App() {
  const [isOverwriteOpen, setIsOverwriteOpen] = useState(false);
  const [resolveCallback, setResolveCallback] =
    useState<ResolveCallbackType>(null);
  const currentFileRef = useRef<IFile | null>(null);
  const [filesWithSelectedOption, setFilesWithSelectedOption] =
    useState<FilesWithSelectedOptionType>([]);
  const [overwriteRadioValue, setOverwriteRadioValue] = useState(
    OverwriteOptionsEnum.Overwrite
  );

  const handleOverwriteRadioValue = (val: OverwriteOptionsEnum) => {
    setOverwriteRadioValue(val);
  };

  const handleOverwriteModalOpen = (
    file: IFile
  ): Promise<OverwriteOptionsEnum> => {
    return new Promise((resolve) => {
      currentFileRef.current = file;
      setIsOverwriteOpen(true);
      setResolveCallback(() => resolve);
    });
  };

  const handleOverwriteOptionSelected = (action: OverwriteOptionsEnum) => {
    if (!resolveCallback) return;
    resolveCallback(action);
    handleOverwriteRadioValue(OverwriteOptionsEnum.Overwrite);
    setIsOverwriteOpen(false);
  };

  const handleOverwrite = async () => {
    console.log("Trigger Overwrite: STARTING POINT");
    const fileWithOption = [];
    for (const file of files) {
      if (!file.isDuplicate) continue;
      const action = await handleOverwriteModalOpen(file);
      fileWithOption.push({
        id: file.id,
        name: file.name,
        option: action,
      });
    }
    setFilesWithSelectedOption(fileWithOption);
  };

  return (
    <main className="container py-16 mx-auto">
      <h1 className="text-center text-2xl font-bold mb-10">File Overwrite</h1>

      {filesWithSelectedOption.length === 0 && (
        <Button onClick={handleOverwrite}>
          <Upload /> Upload
        </Button>
      )}

      <OverwriteDialog
        isOpen={isOverwriteOpen}
        handleOverwriteOptionSelected={handleOverwriteOptionSelected}
        currentFile={currentFileRef.current}
        handleOverwriteRadioValue={handleOverwriteRadioValue}
        overwriteRadioValue={overwriteRadioValue}
      />
      {filesWithSelectedOption.length > 0 && (
        <pre className="mt-2 w-[500px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(filesWithSelectedOption, null, 2)}
          </code>
        </pre>
      )}
    </main>
  );
}

export default App;
