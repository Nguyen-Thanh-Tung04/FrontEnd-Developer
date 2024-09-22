import { useState } from 'react'
import "./App.css";
import { ShowHide } from './Components/ShowHide';
import { Tab } from './Components/Tab';
import Counter from './Components/Counter';
import { DemoForm } from './Components/DemoForm';
function App() {
  // const [state, setState] = useState("Tung");
  // console.log(state, "state");
  // const handleClick = () => {
  //   setState("Tu");
  // };
  return (
    <>
     {/* {state} */}
     {/* <button onClick={handleClick}>Change state</button> */}
     {/* <ShowHide/> */} 
     {/* <Tab /> */}
     {/* <Counter /> */}
     <DemoForm />
    </>
  );
}

export default App
