import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu from "../../components/Menu";
import { MenuItem } from "../../components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SuggestedAccount } from "../../components/SuggestedAccount";
import {
  HomeIcon,
  HomeActiveIcon,
  UserGroupIcon,
  UserGroupActiveIcon,
  LiveIcon,
  LiveActiveIcon,
} from "../../../Components/Icons";
const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          to="/"
          title="For you"
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          to="/following"
          title="Following"
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          to="/live"
          title="Live"
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestedAccount label="Suggest Account" />
      <SuggestedAccount label="Following accounts" />
    </aside>
  );
};
export default Sidebar;
