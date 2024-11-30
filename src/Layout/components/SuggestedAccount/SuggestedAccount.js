import classNames from "classnames/bind";
import styles from "./SuggestAccount.module.scss";
import Proptypes from "prop-types";
import AccountItem from "./AccountItem";
const cx = classNames.bind(styles);
function SuggestedAccount({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx("more-btn")}>See all</p>
    </div>
  );
}
SuggestedAccount.propTypes = {
  label: Proptypes.string.isRequired,
};
export default SuggestedAccount;
