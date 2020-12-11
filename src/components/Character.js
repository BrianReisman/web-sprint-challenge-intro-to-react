// Write your Character component here
import React from "react";

const Character = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h3>{data.name}</h3>
      <p>Pleased to meet you! I've got a lovely {data.skin_color} hue of skin really accentuates my {data.eye_color} eyes</p>
      <p>Born in the year ${data.birth_year} I don't look a day over eligible and a I rock my mass of {data.mass}</p>
    </div>
  );
};

export default Character;
