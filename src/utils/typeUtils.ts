import { IconNames } from "@assets/icon/icons";

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface INavProps {
  list?: IconNames;
  icon: IconNames;
  title: string;
  type: "menu" | "submenu";
  color: string;
  children?: INavProps[];
}

export type { IRouterType, INavProps };
