import { Icon } from "@assets/icon";
import * as S from "./index.styled";
import { FC, useState } from "react";

interface IProps {
  alam?: boolean;
}

export const AlamButton: FC<IProps> = ({ alam }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <S.Container
      $alam={alam ? true : false}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon
        name="DeviceNotification"
        color={!alam && hover ? "var(--blue-main)" : "var(--gray-1000)"}
      />
      {alam && <div className="alam" />}
    </S.Container>
  );
};
