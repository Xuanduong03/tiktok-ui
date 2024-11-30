import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "../../../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e5bbd0140562f1c6f20e625dd63ce652~c5_300x300.webp?lk3s=a5d48078&nonce=75200&refresh_token=c2a9c48d83fe8408d64ab82feeccd116&x-expires=1733144400&x-signature=byyp%2FrbgVLsc96Uolx%2F4iXfhQIA%3D&shp=a5d48078&shcp=c1333099"
          alt="Lan Anh"
        />
        <Button primary className={cx("follow-btn")}>
          Follow
        </Button>
      </header>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>nguyenlananh</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyễn Lan Anh</p>
      </div>
      <div className={cx("analytics")}>
        <strong className={cx("value")}>8.2M </strong>
        <span className={cx("label")}>Followers</span>
        <strong className={cx("value")}>8.2M </strong>
        <span className={cx("label")}>Likes</span>
      </div>
    </div>
  );
}

export default AccountPreview;
