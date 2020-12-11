import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";
import styled from "styled-components";

const App = () => {
  const [state, setState] = useState([]);
  
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
      return <Character data={state[i]} />;
  });
  
  const StyledApp = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-self: auto;
    align-items: center;
    *{
      border: 1px solid blue;
    }
    p{
      line-height: -1px;
      letter-spacing: -1px;
      margin: 8px;
      border: 1px solid red;
    }
  `

  return (
    <StyledApp>
      <div className="App">
        <h1 className="Header">Characters</h1>
        {char}
      </div>
    </StyledApp>
  );
};

export default App;
