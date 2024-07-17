import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { FileView } from "@features/ui/navfileview";
import { MAIN_MENU_DATA, PROJECT_DATA, SUPPORT_DATA } from "@utils/dataUtils";

export const Navbar = () => {
  return (
    <div className={S.body}>
      <div className={S.header}>
        <div className={S.logo}>
          <img src="/logo.svg" alt="logo" className={S.logo_mini} />
          <img src="/longlogo.svg" alt="full logo" />
        </div>
        <button className={S.narrow}>
          <Icon name="ArrowDirectionDoubleLeft" color="var(--blue-main)" />
        </button>
      </div>
      <div className={S.navbar}>
        <FileView title="Main menu" data={MAIN_MENU_DATA} />
        <div className={S.border} />
        <FileView title="Project Name" data={PROJECT_DATA} active />
        <div className={S.border} />
        <FileView title="Help and support" data={SUPPORT_DATA} />
      </div>
    </div>
  );
};
