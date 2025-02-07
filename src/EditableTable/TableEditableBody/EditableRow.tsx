import React from "react";
import { EditableRowProps } from "../types";

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  return <tr {...props} />;
};
