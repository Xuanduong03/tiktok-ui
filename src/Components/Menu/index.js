import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as PropWrapper } from "../Popper";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <div>
      <TippyHeadless
        interactive
        delay={[0, 700]}
        placement="bottom-end"
        offset={[12, 8]}
        onHide={() => {
          setHistory((pre) => pre.slice(0, 1));
        }}
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PropWrapper className={cx("menu-popper")}>
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setHistory((pre) => pre.slice(0, pre.length - 1));
                  }}
                />
              )}
              <div className={cx("menu-scroll")}>{renderItems()}</div>
            </PropWrapper>
          </div>
        )}
      >
        {children}
      </TippyHeadless>
    </div>
  );
}

export default Menu;
