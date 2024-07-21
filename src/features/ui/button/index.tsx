import { FC } from "react";
import * as S from "./index.styled";

interface IProps {
  style: "primary" | "secondary" | "link";
  size: "sm" | "md" | "lg";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  text?: string;
}

export const Button: FC<IProps> = ({
  style,
  size,
  rightIcon,
  leftIcon,
  text,
}) => {
  return (
    <S.Container $style={style} $size={size}>
      {rightIcon && rightIcon}
    </S.Container>
  );
};
