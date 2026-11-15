// we will learn " Dependency array "
// Revise cleanup function and how to use it with " Dependency array "
// we will learn about useEffect hook and how to use it with " Dependency array "

/*

NOTE:- The code we write in useEffect is used at the time of mounting and ignored during re-rendering and the function we return in useEffect is called at the time of unmounting.

what is mounting and unmounting ?
Mounting:- when we render a component for the first time then it is called mounting.
Unmounting:- when we remove a component from the DOM then it is called unmounting.



*/

// Abhi tak humne ye dekha tha ki jab component mount ho aur unmount ho to kya kya code execute ho useEffect me but now we are implementing that when our "state changes " then what will happen.

// NOTE:- If u have multiple useEffects in a component then all useEffects are called at the time of mounting and they call at the time of re-rendering if state varables are passed into the dependency array.But when re-render is happening then cleanup code is called first and then after the code written in useEffect is called. It means cleanup code is called first and then after the code written in useEffect is called.because cleanup code is used to clean the previous state and then after the code written in useEffect is called to set the new state. why ? because if we don't clean the previous state then it will create a memory leak and our application will crash. so cleanup code is called first and then after the code written in useEffect is called to set the new state.




import { useState } from "react";
import { useEffect } from "react";

export default function App2() {   // writing Counter concept in App itself and state variables also
  const [count, setcount] = useState(0);

  function increase() {
    setcount((c) => c + 1);
  }

  // we are pasing counter component a state variable as an argument  
  return (
    <div>    
      <Counter count={count}></Counter>  
      <button onClick={increase}>click me </button>
    </div>
  );
}


function Counter(props) {

  useEffect(function () {
    console.log("on mount");

    return function() {
      console.log("on unmount");
    };
  }, []);

  useEffect(
    function () {
      console.log("count has changed"); // this is called at the time of mounting and also at the time of re-rendering when state variable changes. why ? because we have passed a state variable in dependency array so when this state variable changes then this useEffect will be called again and again.It means all useEffect is called at the time of mounting and they call at the time of re-rendering when state varables are passed into the dependency array.

      return function() {
        console.log("cleanup");
      };
    },
    [props.count],
  );

  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
}

