import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  const [state, setState] = useState([]);
  console.log(state);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setState(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


const char = state.map((char, i) => {
  console.log(char)
  return <Character data={state[i]}/>
})

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {char}
    </div>
  );
};

export default App;
