import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  let [text, setText] = useState("Rendered from React");

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("http://localhost:4000/");
      setText(data.data.msg);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {text}
      </header>
    </div>
  );
}

export default App;
