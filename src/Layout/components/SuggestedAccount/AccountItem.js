import classNames from "classnames/bind";
import styles from "./SuggestAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Proptypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../../../Components/Popper";
import AccountPreview from "./AccountPreview";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <Tippy
      interactive
      delay={[800, 0]}
      offset={[-20, 0]}
      placement="bottom"
      render={(attrs) => {
        return (
          <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <AccountPreview />
            </PopperWrapper>
          </div>
        );
      }}
    >
      <div className={cx("account-item")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e5bbd0140562f1c6f20e625dd63ce652~c5_300x300.webp?lk3s=a5d48078&nonce=75200&refresh_token=c2a9c48d83fe8408d64ab82feeccd116&x-expires=1733144400&x-signature=byyp%2FrbgVLsc96Uolx%2F4iXfhQIA%3D&shp=a5d48078&shcp=c1333099"
          alt="Lan Anh"
        />
        <div className={cx("item-info")}>
          <p className={cx("nickname")}>
            <strong>Nguyenlananh</strong>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </p>
          <p className={cx("name")}>Nguyễn Lan Anh</p>
        </div>
      </div>
    </Tippy>
  );
}
AccountItem.propTypes = {};
export default AccountItem;
