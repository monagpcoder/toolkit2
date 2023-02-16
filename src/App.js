import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./app/counterSlice";
const App = () => {
   const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch()
 //const [counter, setCounter] =useState(0);
  

   const incrementCounter = () => {
   dispatch(increment());
   };
   const decrementCounter =() => {
   dispatch(decrement());
   }
  return <div>
  <p>test</p>
    {<div> Counter {counter}</div> }
     <button style={{fontSize:"30px", marginRight:'50px'}} onClick={incrementCounter}>increment</button>
    <button style={{fontSize:'30px'}} onClick={decrementCounter}>decrement</button>
    <button style={{fontSize:'30px'}} onClick={()=> dispatch(incrementByAmount(33))}>increment by 33</button> 
  </div>
}
export default App;
