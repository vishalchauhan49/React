
 /* 
 
 What App is doing is it is creating a component which is a function and this function returns a JSX element which is a div   and inside that div we are calling another component called Counter.

 Means this app is a parent component and Counter is a child component.aND WITHOUT THIS PARENT COMPONENT WE CANNOT CALL THE CHILD COMPONENT.

 This is the main functinon we can say wihout this app out react components will not work because this is the main component which is being called in the main.jsx file and this is the root component of our react application.

 This is the child component which is being called in the parent component App.

 This is a function which is returning a JSX element which is a div and inside that div we are displaying the count and a button which is calling the increasecount function when clicked.

 This is a state variable which is being used to store the count value and this state variable is being initialized with the useState hook which is being imported from react.

 We are using the useState hook to create a state variable called count and a function called setcount which is used to update the value of count.

 setcount is a function which is used to update the value of count and this function is being called in the increasecount function which is being called when the button is clicked.

 why we used [count,setcount] = useState(0) is because we are using array destructuring to get the value of count and setcount from the useState hook which is returning an array with two values the first value is the current state value and the second value is a function which is used to update the state value.

 array destructuring is a feature of ES6 which allows us to extract values from an array and assign them to variables in a single statement.for example if we have an array const arr = [1,2,3] and we want to get the first value of the array and assign it to a variable called a we can do it like this const [a] = arr and now a will be equal to 1. Similarly in our case we are getting the first value of the array which is the current state value and assigning it to count and the second value of the array which is a function to update the state value and assigning it to setcount.

 A structure of a component looks like this :- first we have a function which is returning a JSX element and inside that JSX element we can have other components or HTML elements and we can also have state variables and functions to update the state variables and we can also have props which are used to pass data from parent component to child component.

 Meaning of props is properties which are used to pass data from parent component to child component and we can access the props in the child component using the props object which is passed as an argument to the child component function and we can access the props using props.propname where propname is the name of the prop which is being passed from the parent component to the child component.

 What is jsx ? JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows us to write HTML-like code in our JavaScript files.
 JSX is not a string or HTML. It is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. JSX is transpiled to JavaScript by a tool called Babel before it is executed in the browser. JSX makes it easier to write and understand the structure of our components and how they will be rendered in the DOM.

 so components are the building blocks of a react application and they are used to create reusable UI elements and we can have multiple components in a react application and we can also have nested components which means we can have a component inside another component and we can also have state variables and functions to update the state variables in the components and we can also have props which are used to pass data from parent component to child component.

 Components are just functions which are returning jsx elements , simply they are those DOM elements which gets re-rendered when a state is changed. U can saythat they are just the elements of our website which have dynamic contents .

*/


// Dont give a line break after return statement because it will give an error because it will be considered as a semicolon and the function will return undefined and the component will not be rendered in the DOM. So always give a line break after return statement and then write the JSX element which you want to return from the component.

import { useState } from 'react'

function App(){

return <div> <Counter></Counter> </div>

}




function Counter(){            

const [count,setcount] = useState(0);        // its initial state , state variables initialization


function increasecount(){
  setcount(count + 1);
}

               // This is what the core component is . 
              // Component definitin is How a DOM element should modify when a state is changed
return <div>
<h1>{count}</h1> 
<button onClick={increasecount}>click me </button>
</div>

}

export default App