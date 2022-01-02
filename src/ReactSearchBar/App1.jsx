import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json"

const App1 = () => {
  return <div className="App1">App1
    <SearchBar placeholder={"Enter a book name..."} data={BookData}/></div>;
}

export default App1
