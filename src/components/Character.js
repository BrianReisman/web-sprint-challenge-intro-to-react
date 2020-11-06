import React, { useState} from 'react';
import styled from 'styled-components';
import Button from './Button'
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

  return (
    <MyDiv>
      <h2>{data.name}</h2>
      <p>...a {data.height >= 150 ? 'tall' : 'short'} glass of water</p>
      
      
      <Button data={data}/>
    
    
    </MyDiv>
  );
}

export default Character;