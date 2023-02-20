import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import Home from "./Home"


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <Home/>
      <button onClick={() => dispatch(decrement())}>-</button>
      
    </div>
  );
}

export default App;
