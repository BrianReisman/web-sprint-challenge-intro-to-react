import React, { useState} from 'react';
import styled from 'styled-components';
// Write your Character component here



const MyDiv = styled.div`
h2{
  color: ${props => props.theme.secondaryColor};
  font-size: 30px;
}
p{
  font-weight: bold;
  font-size: 20px;
}
`


const Character = (props) => {
  const { data } = props;
// console.log(data); // data = the array of ten characters.
const [click, setClick] = useState(false);

const showTheGoods = () => { //I want to target THIS button and change the text content to birthday >>  <<
  const btn = document.getElementById('btn');
  
  if(click === false){
    setClick(true);
    btn.textContent = data.birth_year;
    console.log(btn);
  } else {
    setClick(false);
    btn.textContent = 'Click to get their birth year so you can see if your signs match!';
  }
  
};

  return (
    <MyDiv>
      <h2>{data.name}</h2>
      <p>...a {data.height >= 150 ? 'tall' : 'short'} glass of water</p>
      <button id={'btn'} onClick={() => showTheGoods()}>Click to get their birth year so you can see if your signs match!</button>
    </MyDiv>
  );
}

export default Character;