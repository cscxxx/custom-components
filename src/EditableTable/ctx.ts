import { FormInstance } from "antd/es/form";
import React, { useContext } from "react";

type IStore = { form: FormInstance } | any;

export const EditableContext = React.createContext<IStore>({} as IStore);

export const useStore = () => {
  const store = useContext(EditableContext)!;
  return store;
};
