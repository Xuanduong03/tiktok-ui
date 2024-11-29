import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TippyHeadless from "@tippyjs/react/headless";
import { Wrapper as PropWrapper } from "../Popper";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import AccountItem from "../AccountItem";
import { useState, useEffect, useRef } from "react";
import useDebound from "../hooks";
import { search } from "../ApiServices/searchService";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounded = useDebound(searchValue, 500);

  useEffect(() => {
    if (!debounded.trim()) {
      setSearchResult([]);
      return;
    }
    fetchApi();
  }, [debounded]);
  const fetchApi = async () => {
    setLoading(true);
    const result = await search(debounded);
    setSearchResult(result);
    setLoading(false);
  };
  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(e.target.value);
    }
  };
  return (
    <div>
      <TippyHeadless
        interactive
        delay={[0, 500]}
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex="-1" {...attrs}>
            <PropWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PropWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            placeholder="Search accounts and videos"
            spellCheck={false}
            value={searchValue}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {searchValue && !loading && (
            <button className={cx("clear")} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}
          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
