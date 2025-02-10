import { Input, Popconfirm } from "antd";
import { RuleObject } from "antd/es/form";
import React from "react";
import MyInput from "./MyInput.tsx";
import { ColumnTypes, DataType } from "./types";

export default ({ dataSource, setDataSource }) => {
  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
    rules?: RuleObject[];
  })[] = [
    {
      title: "name",
      dataIndex: "name",
      width: "30%",
      editable: true,
      rules: [
        {
          required: true,
          message: "test",
        },
      ],
      render: (value: any, record: any, index: number) => {
        return <MyInput />;
      },
    },
    {
      title: "age",
      dataIndex: "age",
      editable: true,
      rules: [
        {
          required: true,
          message: "age",
        },
      ],
      render: (value: any, record: any, index: number) => {
        return (
          <Input
            onPressEnter={() => {
              console.log(121211);
            }}
          />
        );
      },
    },
    {
      title: "address",
      dataIndex: "address",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              handleDelete(record.key);
            }}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => {
        debugger;
        return {
          record,
          // editable: col.editable,
          // dataIndex: col.dataIndex,
          // title: col.title,
          ...col,
          handleSave,
        };
      },
    };
  });

  return { columns };
};
