import { useState } from "react";

export type OnChangeProps = {
  target: number;
  text: string;
};

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (nativeEvent: OnChangeProps) => {
    const { target, text } = nativeEvent;
    setValue({ [target]: text });
  };

  return {
    value,
    onChange: handleChange,
  };
};
