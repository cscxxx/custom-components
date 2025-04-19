import React, { useContext } from "react";
import { DataType } from "./types";

type IStore = {
  dataSource: DataType[];
  setDataSource: React.Dispatch<React.SetStateAction<DataType[]>>;
};

export const EditableTableContext = React.createContext<IStore>({} as IStore);

export const useStore = () => {
  const store = useContext(EditableTableContext)!;
  return store;
};
