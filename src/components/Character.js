import React from 'react';
// Write your Character component here

const Character = (props) => {
  const { data } = props;
console.log(data); // data = the array of ten characters.

  return (
    <div>
      <h1>{data.name}</h1>
      <p>...a {data.height >= 150 ? 'tall' : 'short'} glass of water</p>
      <button>Click to get their birthday so you can see if your signs match!</button>
    </div>
  );
}

export default Character;