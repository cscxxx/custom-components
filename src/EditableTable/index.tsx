import { Button, Table } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { useStore } from "./ctx.ts";
import "./index.css";
import { EditableCell } from "./TableEditableBody/EditableCell.tsx";
import { EditableRow } from "./TableEditableBody/EditableRow.tsx";
import { ColumnTypes, DataType } from "./types";
import useColumns from "./use-columns.tsx";

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

  const [count, setCount] = useState(2);
  const form = useStore();

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: ``,
      age: "",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  return (
    <div>
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
    </div>
  );
};

export default App;
