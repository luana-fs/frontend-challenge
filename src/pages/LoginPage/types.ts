import { Dispatch, SetStateAction } from "react";

export interface LoginPageProps {
  states: {
    isPasswordVisible: boolean;
    inputValue: string;
  };
  setters: {
    setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
    setInputValue: () => Dispatch<SetStateAction<string>>;
  };
  handlers: {
    handleOnChange?: (arg0: string) => string;
  };
}
