import "./App2.css";
import JSONDATA from "./MOCK_DATA.json";

const App2 = () => {
  return (
    <div className="App2">
      <p>Api2</p>
      <input type="text" placeholder={"Search..."} />
      {JSONDATA.map((val, key) => {
        return <div className="user" key={key}><p> {val.first_name} {val.last_name}</p></div>
      })}
    </div>
  );
};

export default App2;
