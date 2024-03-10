import React from 'react'
import {decrement,increment} from "../redux/counterSlice";
import { useDispatch,useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.value)
    const dispatch=useDispatch();

const handleIncrement=()=>{
    dispatch(increment())

}

const handleDecrement=()=>{
    dispatch(decrement())

}

  return (
    <div>
     <button onClick={handleIncrement}>
        Increment
     </button>

     <button onClick={handleDecrement}>
        Decrement
     </button>

<h1>{count}</h1>
    </div>
  )
}

export default Counter