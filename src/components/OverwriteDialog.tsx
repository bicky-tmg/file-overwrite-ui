import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { OverwriteOptionsEnum } from "@/types/types";
import { overwriteRadio } from "@/constants/data";

interface IOverwriteDialogProps {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
  handleOverwrite: () => void;
}

export default function OverwriteDialog({
  isOpen,
  onOpenChange,
  handleOverwrite,
}: Readonly<IOverwriteDialogProps>) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button onClick={handleOverwrite}>
          <Upload /> Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold ">
            Upload Option
          </DialogTitle>
          <DialogDescription>
            <span className="text-base leading-[26px] font-normal text-grayscale-waterloo block">
              “yourname.jpeg” already exists.
            </span>
            <span className="text-base leading-[26px] font-normal text-grayscale-waterloo block">
              Do you want to:
            </span>
          </DialogDescription>
        </DialogHeader>
        <RadioGroup
          defaultValue={OverwriteOptionsEnum.Overwrite}
          onValueChange={() => {}}
        >
          {overwriteRadio.map((radio) => (
            <div className="flex items-center space-x-2" key={radio.id}>
              <RadioGroupItem value={radio.value} id={radio.id} />
              <label
                className="text-text-grayscaleLicorice text-base font-semibold"
                htmlFor={radio.id}
              >
                {radio.label}
              </label>
            </div>
          ))}
        </RadioGroup>
        <DialogFooter>
          <Button>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
