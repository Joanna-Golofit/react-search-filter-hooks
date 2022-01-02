import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";


const SearchBar = ({ placeholder, data }) => {
  const [ filteredData, setFilteredData ] = useState([]);

  const handleFilter = (e) => {
    console.log(e.target.value);
    const searchWord = e.target.value;
    const filtered = data.filter((book) => book.title.toLowerCase().includes(searchWord));
    console.log("filtered", filtered);
    setFilteredData(filtered);
  }
  return (
    <div className="search">
      SearchBar
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {/* {filteredData && ( // empty array is truthy */}
         {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map(({ title, link }, key) => (
            <a
              key={key}
              className="dataItem"
              // target="_blank"
              href={link}
            >
              <p>{title}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
