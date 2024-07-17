import ArrowDirectionDoubleLeft from "./ArrowDirectionDoubleLeft";
import ArrowDirectionRight from "./ArrowDirectionRight";
import EcommerceBoard from "./EcommerceBoard";
import Folder from "./Folder";
import InterfaceAddCircle from "./InterfaceAddCircle";
import InterfaceHelp from "./InterfaceHelp";
import InterfaceLogout from "./InterfaceLogout";
import InterfaceSetting from "./InterfaceSetting";
import UserUser from "./UserUser";
import UserUsers from "./UserUsers";

export const Icons = {
  ArrowDirectionDoubleLeft,
  ArrowDirectionRight,
  EcommerceBoard,
  Folder,
  InterfaceAddCircle,
  InterfaceHelp,
  InterfaceLogout,
  InterfaceSetting,
  UserUser,
  UserUsers,
} as const;

export type IconNames = keyof typeof Icons;
