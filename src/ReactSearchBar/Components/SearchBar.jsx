import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";
import { useState } from "react";


const SearchBar = ({ placeholder, data }) => {
  const [ filteredData, setFilteredData ] = useState([]);
  const [ wordEntered, setWordEntered ] = useState("");

  const handleFilter = (e) => {
    console.log(e.target.value);
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const filtered = data.filter((book) => book.title.toLowerCase().includes(searchWord.toLowerCase()));
    console.log("filtered", filtered);
    //czyszczenie  pola z wynikami jesli znowu jest pusty input
    searchWord === "" ? setFilteredData([]) : setFilteredData(filtered);
  }

  const clearInput = (e) => {
    console.log(
      e.target.parentElement.parentElement.firstElementChild
      // .querySelector("input") // czemu to nie dzilala?
      // .closest("input")   // czemu to nie dzilala?
    );
    // let inputValue = e.target.parentElement.parentElement.firstElementChild;
    // console.log(inputValue);
    // inputValue = "";
    setWordEntered("");
    setFilteredData([]);
     e.target.parentElement.parentElement.firstElementChild.focus()
  }
  return (
    <div className="search">
      SearchBar
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div className="searchIcon">
          {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/> }
        </div>
      </div>
      {/* {filteredData && ( // empty array is truthy wiec nie zadziala */}
         {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map(({ title, link }, key) => (
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
