import "./GlobalStyles.scss";
import Proptypes from "prop-types";
const GlobalStyles = ({ children }) => {
  return children;
};
GlobalStyles.propTypes = {
  children: Proptypes.node,
};
export default GlobalStyles;
