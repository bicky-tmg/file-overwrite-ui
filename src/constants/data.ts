import { OverwriteOptionsEnum } from "@/types/types";

export const overwriteRadio = [
  {
    id: OverwriteOptionsEnum.Overwrite,
    value: OverwriteOptionsEnum.Overwrite,
    label: "Overwrite",
  },
  {
    id: OverwriteOptionsEnum.OverwriteSourceNew,
    value: OverwriteOptionsEnum.OverwriteSourceNew,
    label: "Overwrite if source newer",
  },
  {
    id: OverwriteOptionsEnum.OverwriteDifferentSize,
    value: OverwriteOptionsEnum.OverwriteDifferentSize,
    label: "Overwrite if different size",
  },
  {
    id: OverwriteOptionsEnum.OverwriteSourceNewOrDifferentSize,
    value: OverwriteOptionsEnum.OverwriteSourceNewOrDifferentSize,
    label: "Overwrite if different size or newer",
  },
  {
    id: OverwriteOptionsEnum.UploadCopy,
    value: OverwriteOptionsEnum.UploadCopy,
    label: "Upload as a copy",
  },
  {
    id: OverwriteOptionsEnum.Skip,
    value: OverwriteOptionsEnum.Skip,
    label: "Skip",
  },
];

export const files = [
  {
    id: 1,
    name: "test.txt",
  },
  {
    id: 2,
    name: "yourname.jpg",
  },
  {
    id: 3,
    name: "test-data.pdf",
  },
  {
    id: 4,
    name: ".gitignore",
  },
  {
    id: 5,
    name: "config",
  },
  {
    id: 6,
    name: "types.tsx",
  },
  {
    id: 7,
    name: "data.ts",
  },
];
