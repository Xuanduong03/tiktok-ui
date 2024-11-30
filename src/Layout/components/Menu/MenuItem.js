import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import Proptypes from "prop-types";
const cx = classNames.bind(styles);
function MenuItem({ to, title, icon, activeIcon }) {
  return (
    <NavLink
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}
MenuItem.propTypes = {
  to: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  icon: Proptypes.node.isRequired,
  activeIcon: Proptypes.node.isRequired,
};
export default MenuItem;
