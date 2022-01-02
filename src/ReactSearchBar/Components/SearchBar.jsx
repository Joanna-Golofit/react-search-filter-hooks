import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";


const SearchBar = ({ placeholder, data }) => {
  // const {filteredData, setFilteredData} = useState
  return (
    <div className="search">
      SearchBar
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {/* { filteredData && */}
      <div className="dataResult">
        {data.map(({ title, link }, key) => (
          <a key={key} className="dataItem"
            // target="_blank"
            href={link}>
            <p>{title}</p>
          </a>
        ))}
      </div>
      {/* } */}
    </div>
  );
};

export default SearchBar;
