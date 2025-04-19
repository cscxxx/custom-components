import { FormInstance } from "antd/es/form";
import React, { useContext } from "react";

type IStore = { form: FormInstance };

export const EditableRowContext = React.createContext<IStore>({} as IStore);

export const useStore = () => {
  const store = useContext(EditableRowContext)!;
  return store;
};
