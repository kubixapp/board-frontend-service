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
  active: boolean;
}

export const NavbarItem: FC<IProps> = ({
  list,
  icon,
  title,
  type,
  color,
  active,
}) => {
  return (
    <S.Container
      $main={type === "menu"}
      $type={list ? true : false}
      $color={color}
      $active={active}
    >
      {list && <Icon name={list} color={active ? "var(--blue-main)" : color} />}
      <Icon name={icon} color={active ? "var(--blue-main)" : color} />
      <span className="medium sm poppins">{title}</span>
    </S.Container>
  );
};
