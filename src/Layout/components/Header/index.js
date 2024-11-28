import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Search from "../../../Components/Search";
import {
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faEllipsisVertical,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Components/Button";
import Menu from "../../../Components/Menu";
import {
  UploadIcon,
  MessageIcon,
  InboxIcon,
  SearchIcon,
} from "../../../Components/Icons";
import Images from "../../../Components/Images";
const cx = classNames.bind(styles);

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];
const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@hoaa",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/settings",
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];
const handleMenuChange = (menuItem) => {
  switch (menuItem.type) {
    case "language":
      break;
    default:
  }
};
const Header = () => {
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo.default} />
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEM}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Images
                className={cx("user-avatar")}
                src="htps://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e5bbd0140562f1c6f20e625dd63ce652~c5_300x300.webp?lk3s=a5d48078&nonce=60532&refresh_token=8dfb9ecbabc950854e062dd702e549ce&x-expires=1732795200&x-signature=7vha51eZfzDXypEHYL80fSt5H94%3D&shp=a5d48078&shcp=c1333099"
                alt="Nguyen Lan Anh"
                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};
export default Header;
