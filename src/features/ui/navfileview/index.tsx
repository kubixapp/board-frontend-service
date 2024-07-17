import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";
import { INavProps } from "@utils/typeUtils";
import { Icon } from "@assets/icon";
import ViewList from "./viewList";

interface IProps {
  title: string;
  data: INavProps[];
  active?: boolean;
}

export const FileView: FC<IProps> = ({ title, data, active }) => {
  return (
    <div className={S.body}>
      <div className={S.body_title}>
        <span className={clsx("sm semibold poppins", S.body_title_content)}>
          {title}
        </span>
        {active && (
          <button className={S.body_title_add}>
            <Icon name="InterfaceAddCircle" color="var(--gray-1100)" />
          </button>
        )}
      </div>
      <ViewList data={data} />
    </div>
  );
};
