import { Form } from "antd";
import React, { useEffect } from "react";
import { useStore } from "../ctx.ts";
// import { EditableRowProps } from "../types";

export const EditableRow: React.FC = ({ ...props }) => {
  const { dataSource, setDataSource } = useStore();
  const [form] = Form.useForm();
  useEffect(() => {
    form &&
      setDataSource((prev) => {
        const newData = [...prev];
        const index = newData.findIndex(
          (item) => item.key.toString() === props["data-row-key"]
        );
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          form: form,
        });
        return newData;
      });
    try {
      form.validateFields();
    } catch (error) {
      console.log(error);
    }
  }, [form]);
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
      // validateTrigger={["onBlur", "onChange"]}
      component={false}
    >
      <tr {...props} />
    </Form>
  );
};
