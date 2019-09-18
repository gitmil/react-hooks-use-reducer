import React, { useReducer } from "react";
import "./App.css";

const initState = {
  count: 0
};

function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFunction, initState);

  function plueOne() {
    dispatch({ type: "INCREMENT" });
  }

  function minusOne() {
    dispatch({ type: "DECREMENT" });
  }
  const a = {s:"a", a:"a"};
  return (
    <div className="App">
      <header className="App-header">
        <h2>useReducer Example</h2>
        <h3> Count: {state.count}</h3>
        <button onClick={plueOne}>Plus One</button>
        <button onClick={minusOne}>Minus One</button>
        <span className="mv-menu-lable">
        {a.subitems?<i className="fa fa-angle-right"/>: <div></div>} 
        </span>
        
      </header>
    </div>
  );
}

export default App;
