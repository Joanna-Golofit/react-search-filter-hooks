import { useState } from "react";
import "./App2.css";
import JSONDATA from "./MOCK_DATA.json";

const App2 = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App2">
      <p>App2</p>
      <input
        type="text"
        placeholder={"Search..."}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="results">
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else {
            return val.first_name
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase());
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>
                {val.first_name} {val.last_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App2;
