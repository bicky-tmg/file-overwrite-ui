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

export default function OverwriteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Upload /> Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-bold ">
            Upload Option
          </DialogTitle>
          <DialogDescription>
            <p className="text-base leading-[26px] font-normal text-grayscale-waterloo">
              “yourname.jpeg” already exists.
            </p>
            <p className="text-base leading-[26px] font-normal text-grayscale-waterloo">
              Do you want to:
            </p>
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
