import { FormInstance } from "antd/es/form";
import React, { useContext } from "react";

type IStore = { form: FormInstance };

export const EditableContext = React.createContext<IStore>({} as IStore);

export const useStore = () => {
  const store = useContext(EditableContext)!;
  return store;
};
