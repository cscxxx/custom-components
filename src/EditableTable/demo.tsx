import { Button, Form, Table } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { EditableContext } from "./ctx.ts";
import "./index.css";
import { EditableCell } from "./TableEditableBody/EditableCell.tsx";
import { EditableRow } from "./TableEditableBody/EditableRow.tsx";
import useColumns from "./use-columns.tsx";
import { ColumnTypes, DataType } from "./types";

const App: React.FC = () => {
  
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: "0",
      name: "Edward King 0",
      age: "32",
      address: "London, Park Lane no. 0",
    },
  ]);

  const { columns } = useColumns({ dataSource, setDataSource });

  const [form] = Form.useForm();

  const [count, setCount] = useState(2);

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  return (
    <div>
      <EditableContext.Provider value={{ form }}>
        <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={{
            body: {
              row: EditableRow,
              cell: EditableCell,
            },
          }}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns as ColumnTypes}
        />
      </EditableContext.Provider>
    </div>
  );
};

export default App;
