import React from 'react'
import Button from './components/Button';
const handleClick = (name) => {
    console.log("Button clicked by",name);
};
function ButtonParam() {
  return (
      <>
          <Button onClick={()=> handleClick("Raman")} text={"Click me"}/>
      </>
  )
}

export default ButtonParam