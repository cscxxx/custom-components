import { Button, Form, Table } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { EditableTableContext } from "./ctx.ts";
import "./index.css";
import { EditableCell } from "./TableEditableBody/EditableCell.tsx";
import { EditableRow } from "./TableEditableBody/EditableRow.tsx";
import { ColumnTypes, DataType } from "./types";
import useColumns from "./use-columns.tsx";

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 0,
      name: "1",
      age: 32,
      address1: "London, Par",
      address2: "London, Park Lane no. 0",
    },
  ]);

  const { columns } = useColumns({ dataSource, setDataSource });

  const [count, setCount] = useState(2);

  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: `1`,
      age: 111,
      address1: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <EditableTableContext.Provider value={{ dataSource, setDataSource }}>
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
          rowKey={(record: DataType) => record.key.toString()} // 需要编辑时，必传
          columns={columns as ColumnTypes}
        />
      </EditableTableContext.Provider>
      <br></br>
      <button
        onClick={async () => {
          try {
            // 异步
            for (const item of dataSource) {
              const res = await item.form.validateFields();
              console.log(res);
            }
          } catch (error) {
            console.log(error);
            return;
          }
        }}
      >
        提交
      </button>
      {dataSource?.map((i) => {
        return (
          <>
            <br></br>
            {JSON.stringify(i)}
          </>
        );
      })}
    </div>
  );
};

export default App;
