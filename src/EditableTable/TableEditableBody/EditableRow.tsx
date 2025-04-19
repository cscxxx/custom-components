import { Form } from "antd";
import React from "react";
import { useStore } from "../CTX.ts";
import { EditableRowProps } from "../types";
import { EditableRowContext } from "./RowCTX.ts";

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const { dataSource, setDataSource } = useStore();
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      initialValues={dataSource?.find(
        (item) => item.key.toString() === props?.["data-row-key"]
      )}
      onValuesChange={(changedValues: any, values: any) => {
        props?.["data-row-key"] &&
          setDataSource((prev) => {
            const newData = [...prev];
            const index = newData.findIndex(
              (item) => item.key.toString() === props?.["data-row-key"]
            );
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              ...changedValues,
            });
            return newData;
          });
      }}
      // validateTrigger={["onBlur"]}
      component={false}
    >
      <EditableRowContext.Provider value={{ form }}>
        <tr {...props} />
      </EditableRowContext.Provider>
    </Form>
  );
};
