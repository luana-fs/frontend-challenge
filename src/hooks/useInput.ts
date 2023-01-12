import { useState } from "react";

export type OnChangeProps = {
  target: number;
  text: string;
};

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const { text } = value;

  const handleChange = (nativeEvent: OnChangeProps) => {
    const { target, text } = nativeEvent;
    setValue({ ...value, text });
    // setValue({ ...value, [target]: text });
  };

  return {
    value: text,
    onChange: handleChange,
  };
};
