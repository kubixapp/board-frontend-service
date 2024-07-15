import ArrowDirectionRight from "./ArrowDirectionRight";
import InterfaceAddCircle from "./InterfaceAddCircle";

export const Icons = {
  ArrowDirectionRight,
  InterfaceAddCircle,
} as const;

export type IconNames = keyof typeof Icons;
