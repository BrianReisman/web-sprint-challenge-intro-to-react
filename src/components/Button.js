import React, { useState} from 'react';
// import styled from 'styled-components';


const Button = (props) => {
  const { data } = props
console.log(data);
  const [click, setClick] = useState(false);


  const showTheGoods = () => { //I want to target THIS button and change the text content to birthday >>  <<
    const btn = document.getElementsByClassName('Header');
    console.log(btn[0]);
    if(click === false){
      setClick(true);
      btn[0].textContent = data.birth_year;
      console.log(btn[0].birth_year);
    } else {
      setClick(false);
      btn[0].textContent = 'Characters';
    }
    
  };
  

  return(

    <button id={'btn'} onClick={() => showTheGoods()} >Click to get their birth year so you can see if your signs match! </button>
  )
}



export default Button;


