import { AlamButton, Button, Search } from "@features/ui";
import S from "./index.module.scss";
import { Icon } from "@assets/icon";

const Header = () => {
  return (
    <header className={S.header}>
      <div className={S.header_userinfo}>
        <h6 className="medium clash">Welcome back, Laman</h6>
        <p className="poppins xm medium">
          Dashboard / <span className="light">Members</span>
        </p>
      </div>
      <div className={S.header_control}>
        <Button
          style="link"
          size="sm"
          rightIcon={<Icon name="InterfacePlus" color="var(--gray-100)" />}
        />
        <Search />
        <AlamButton />
      </div>
    </header>
  );
};

export default Header;
