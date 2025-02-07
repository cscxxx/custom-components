import { Input, InputRef } from "antd";
import React, { useEffect, useRef, useState } from "react";
import type { EditableCellProps } from "../types.d.ts";

export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [edit, toggleEdit] = useState<boolean>(false);
  const [valied, setValied] = useState<boolean>(true);

  const inputRef = useRef<InputRef>(null);

  const save = async (e) => {
    if (e.target.value) {
      setValied(true);
    } else {
      setValied(false);
    }
    handleSave({
      ...record,
      address: Math.round(Math.random() * 100),
    });
  };

  let childNode = children;

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (!record?.[dataIndex]) {
        setValied(false);
      }
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (editable) {
    childNode = (
      <>
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        {valied ? null : <div style={{ color: "red" }}>必填</div>}
      </>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
