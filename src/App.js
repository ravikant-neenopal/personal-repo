import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import UserInfo from './UserInfo';
import Intro from './Intro';
import Para from './Para';
import Api from './Api';
import Form from './Form';
import ButtonParam from './ButtonParam';

function App() {
  const stData = [
    {name: "Ravi",course:"CE",roll:1},
    {name: "Ravina",course:"ECE",roll:2},
    {name: "Ram",course:"EE",roll:3},
  ]

  const [show, setShow] = useState(false);
  
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <UserInfo /> */}
      {/* {
        stData.map((item) => (
        <Intro name={item.name} course={item.course} roll={item.roll} />
        ))
      }  */}
      {/* <Para />  */}

      
      {/* <Api /> */}
      {/* <Form /> */}
      {/* <h1>Welcome to React</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} User Info
      </button>
      {show && <Form />} */}
      <ButtonParam />
    </div>
  );
}

export default App;
