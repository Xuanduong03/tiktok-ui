import { forwardRef } from "react";
import { useState } from "react";
import images from "../../assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";
import Proptypes from "prop-types";
const cx = classNames.bind(styles);
function Images(
  { src, alt, className, fallback = images.noImage, ...props },
  ref
) {
  const [_fallback, setFallback] = useState("");

  const handelError = () => {
    setFallback(fallback);
  };
  return (
    <img
      ref={ref}
      src={_fallback || src}
      alt={alt}
      className={cx("wrapper", className)}
      {...props}
      onError={handelError}
    />
  );
}
Images.propTypes = {
  src: Proptypes.string,
  alt: Proptypes.string,
  className: Proptypes.string,
  fallback: Proptypes.string,
};
export default forwardRef(Images);
