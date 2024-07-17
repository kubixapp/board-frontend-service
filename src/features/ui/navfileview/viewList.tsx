import { FC, Fragment, useEffect, useState } from "react";
import S from "./viewList.module.scss";
import { INavProps } from "@utils/typeUtils";
import { NavbarItem } from "../navbarItem";
import clsx from "clsx";

interface IProps {
  data: INavProps[];
}

const ViewList: FC<IProps> = ({ data }) => {
  const [viewActive, setViewActive] = useState<string>("");
  const [viewActiveList, setViewActiveList] = useState<string>("");

  return (
    <div className={S.body}>
      {data.map((item, index) => (
        <Fragment key={index}>
          <NavbarItem
            key={index}
            list={item.list}
            icon={item.icon}
            title={item.title}
            type={item.type}
            color={item.color}
            active={item.list ? viewActiveList : viewActive === item.title}
            onClick={item.list ? setViewActiveList : setViewActive}
          />
          <div
            className={clsx(
              S.subList,
              viewActiveList.includes(item.title) &&
                item.children &&
                item.children.length > 0 &&
                S.active
            )}
          >
            {viewActiveList.includes(item.title) &&
            item.children &&
            item.children.length > 0 ? (
              <>
                {item.children.map((nav, id) => (
                  <NavbarItem
                    key={id}
                    icon={nav.icon}
                    title={nav.title}
                    type={nav.type}
                    color={nav.color}
                    active={viewActive === nav.title}
                    onClick={setViewActive}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ViewList;
