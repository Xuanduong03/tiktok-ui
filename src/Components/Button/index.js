import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  outline,
  rounded,
  text,
  disabled,
  small,
  large,
  className,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    small,
    large,
    disabled,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
Button.propTypes = {
  to: Proptypes.string,
  href: Proptypes.string,
  primary: Proptypes.bool,
  outline: Proptypes.bool,
  rounded: Proptypes.bool,
  text: Proptypes.bool,
  disabled: Proptypes.bool,
  small: Proptypes.bool,
  large: Proptypes.bool,
  className: Proptypes.node,
  leftIcon: Proptypes.node,
  rightIcon: Proptypes.node,
  children: Proptypes.node,
  onClick: Proptypes.func,
};
export default Button;
