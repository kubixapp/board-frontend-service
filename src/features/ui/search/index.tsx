import { Icon } from "@assets/icon";
import * as S from "./index.styled";
import { useState } from "react";

export const Search = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  return (
    <S.Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <S.SearchButton onClick={() => setOpenSearch(true)}>
        <Icon
          name="InterfaceSearch"
          color={hover ? "var(--blue-main)" : "var(--gray-1000)"}
        />
        <input
          type="checkbox"
          checked={openSearch}
          onClick={() => setOpenSearch(true)}
        />
      </S.SearchButton>
    </S.Container>
  );
};
