import React from 'react';
// Write your Character component here

const Character = (props) => {
  const { data } = props;
console.log(data); // data = the array of ten characters.

  return (
    <div>
      {/* <h1>{data}</h1> */}
    </div>
  );
}


export default Character;