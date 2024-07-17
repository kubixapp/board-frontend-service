import MainLayout from "@features/layout/mainLayout";
import { INavProps, IRouterType } from "./typeUtils";
import Board from "@pages/board";

const PAGE_DATA: IRouterType[] = [
  {
    title: "Mainlayout",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        title: "Board",
        path: "/board",
        element: <Board />,
      },
    ],
  },
];

const MAIN_MENU_DATA: INavProps[] = [
  {
    title: "Dashboard",
    icon: "InterfaceAddCircle",
    color: "var(--gray-1100)",
    type: "menu",
  },
  {
    title: "Team",
    icon: "UserUser",
    color: "var(--gray-1100)",
    type: "menu",
  },
  {
    title: "Department",
    icon: "Folder",
    color: "var(--gray-1100)",
    type: "menu",
  },
];

const PROJECT_DATA: INavProps[] = [
  {
    title: "Squad1",
    list: "ArrowDirectionRight",
    icon: "UserUsers",
    color: "var(--gray-1100)",
    type: "menu",
    children: [
      {
        title: "Kanban board",
        icon: "EcommerceBoard",
        color: "var(--gray-1100)",
        type: "submenu",
      },
      {
        title: "Scrum board",
        icon: "EcommerceBoard",
        color: "var(--gray-1100)",
        type: "submenu",
      },
      {
        title: "Planing",
        icon: "EcommerceBoard",
        color: "var(--gray-1100)",
        type: "submenu",
      },
    ],
  },
  {
    title: "Squad2",
    list: "ArrowDirectionRight",
    icon: "UserUsers",
    color: "var(--gray-1100)",
    type: "menu",
  },
];

const SUPPORT_DATA: INavProps[] = [
  {
    title: "Help",
    icon: "InterfaceHelp",
    color: "var(--gray-1100)",
    type: "menu",
  },
  {
    title: "Settings",
    icon: "InterfaceSetting",
    color: "var(--gray-1100)",
    type: "menu",
  },
  {
    title: "Log out",
    icon: "InterfaceLogout",
    color: "var(--gray-1100)",
    type: "menu",
  },
];

export { PAGE_DATA, MAIN_MENU_DATA, PROJECT_DATA, SUPPORT_DATA };
