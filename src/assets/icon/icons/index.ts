import ArrowDirectionDoubleLeft from "./ArrowDirectionDoubleLeft";
import ArrowDirectionRight from "./ArrowDirectionRight";
import DeviceNotification from "./DeviceNotification";
import EcommerceBoard from "./EcommerceBoard";
import Folder from "./Folder";
import InterfaceAddCircle from "./InterfaceAddCircle";
import InterfaceHelp from "./InterfaceHelp";
import InterfaceLogout from "./InterfaceLogout";
import InterfacePlus from "./InterfacePlus";
import InterfaceSearch from "./InterfaceSearch";
import InterfaceSetting from "./InterfaceSetting";
import UserUser from "./UserUser";
import UserUsers from "./UserUsers";

export const Icons = {
  ArrowDirectionDoubleLeft,
  ArrowDirectionRight,
  DeviceNotification,
  EcommerceBoard,
  Folder,
  InterfaceAddCircle,
  InterfaceHelp,
  InterfaceLogout,
  InterfacePlus,
  InterfaceSearch,
  InterfaceSetting,
  UserUser,
  UserUsers,
} as const;

export type IconNames = keyof typeof Icons;
