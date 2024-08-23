export type StorageInfo = {
  userName: string;
  storage: number;
  fileCount: number;
  storageHistory: { [filename: string]: number };
  fileCountHistory: { [filename: string]: number };
};

export type HistoryInfo = {
  timestamp: Date;
  fileName: string;
};

export type TotalStorage = {
  restPercentage: number;
  restSize: number;
  totalSize: number;
  totalHistory: { [filename: string]: TotalStorage };
};
