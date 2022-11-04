import React, { FC } from "react";
import { MainButton } from "./styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <MainButton>{children}</MainButton>;
};

export default Button;
