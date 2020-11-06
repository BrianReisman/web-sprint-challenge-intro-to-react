import React, { useState , useEffect } from 'react';
//ReactDOM?
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  //// Try to think through what state you'll need for this app before starting. Then build out
  //// the state properties here.
  //// Fetch characters from the API in an effect hook.
  //// Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

  //states
  const [characters, setCharacters] = useState([]); //TODO I was initializing as '' which worked when checking the object coming in, but not for when processing each array item?
console.log(characters);

  //api > import data
  useEffect(() => {
  axios
    .get('http://swapi.dev/api/people/')
    .then(res => {
      setCharacters(res.data.results);
    })
    .catch(err => {
      console.log(`Error! Oh nooooooo: ${err}`);
    });
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {console.log(characters)}
        {characters.map((character) => {
          return <Character key={character.name} data={character} />;
        })}
        ;
      </div>
    </div>
  );


}

export default App;


// {console.log(characters)}
// {characters.map(character => {
//     return <Character data={character}/>
//   })
// };


// return (
//   <div className="App">
//     <h1 className="Header">Characters</h1>
//     <Character data={characters}/>
//   </div>
// );