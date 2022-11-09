import { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (params: any) => setValue(params);

  return {
    value,
    onChange: handleChange,
  };
};
