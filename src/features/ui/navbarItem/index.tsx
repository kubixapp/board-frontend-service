import { FC, useEffect, useState } from "react";
import * as S from "./index.styled";
import { Icon } from "@assets/icon";
import { INavProps } from "@utils/typeUtils";

interface IProps extends INavProps {
  active: boolean | string;
  onClick: (data: string) => void;
}

export const NavbarItem: FC<IProps> = ({
  list,
  icon,
  title,
  type,
  color,
  active,
  onClick,
}) => {
  const [viewActive, setViewActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof active === "boolean") {
      console.log("active", active);
      setViewActive(active);
    } else {
      const type = active.includes(title);
      setViewActive(type);
    }
  }, [active]);

  const handleClick = () => {
    if (typeof active === "boolean") {
      onClick(title);
    } else {
      const index = active.includes(title);
      let temp = active;

      if (index) {
        temp = temp.replace(title, "");
      } else {
        temp += ` ${title}`;
      }

      onClick(temp);
    }
  };

  return (
    <S.Container
      $main={type === "menu"}
      $type={list ? true : false}
      $color={color}
      $active={viewActive}
      onClick={handleClick}
    >
      <div className="wrapper">
        {list && (
          <Icon name={list} color={active ? "var(--blue-main)" : color} />
        )}
        <Icon name={icon} color={active ? "var(--blue-main)" : color} />
        <span className="medium sm poppins">{title}</span>
      </div>
    </S.Container>
  );
};
