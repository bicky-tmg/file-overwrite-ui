export enum OverwriteOptionsEnum {
  Overwrite = "overwrite",
  OverwriteSourceNew = "overwrite-source-new",
  OverwriteDifferentSize = "overwrite-different-size",
  OverwriteSourceNewOrDifferentSize = "overwrite-source-new-different-size",
  UploadCopy = "upload-copy",
  Skip = "skip",
}

export interface IFile {
  id: number;
  name: string;
}

export type ResolveCallbackType =
  | ((action: OverwriteOptionsEnum) => void)
  | null;

interface IFileWithSelectedOption extends IFile {
  option: OverwriteOptionsEnum;
}

export type FilesWithSelectedOptionType = IFileWithSelectedOption[];
