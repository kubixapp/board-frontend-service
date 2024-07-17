import { NavbarItem } from "@features/ui";
import S from "./index.module.scss";

const Board = () => {
  return (
    <div className={S.body}>
      <NavbarItem
        list="ArrowDirectionRight"
        icon="InterfaceAddCircle"
        title="Squad 1"
        type="menu"
        color="var(--gray-1100)"
        active={false}
      />
    </div>
  );
};

export default Board;
