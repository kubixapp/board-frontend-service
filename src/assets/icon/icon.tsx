import { FC, useEffect } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  color: string;
}

export const Icon: FC<IProps> = ({ name, color }) => {
  useEffect(() => {
    console.log(name, color);
  }, []);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name](color)}
    </svg>
  );
};
