import { FC } from "react";
import * as S from "./index.styled";
import { Icon } from "@assets/icon";
import { IconNames } from "@assets/icon/icons";

interface IProps {
  list?: IconNames;
  icon: IconNames;
  title: string;
  type: "menu" | "submenu";
  color: string;
}

export const NavbarItem: FC<IProps> = ({ list, icon, title, type, color }) => {
  return (
    <S.Container
      $main={type === "menu"}
      $type={list ? true : false}
      $color={color}
    >
      {list && <Icon name={list} color={color} />}
      <Icon name={icon} color={color} />
      <span className="medium sm poppins">{title}</span>
    </S.Container>
  );
};
