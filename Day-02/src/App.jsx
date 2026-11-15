// WE wanna make a clock type counter .
// The problem is that :- whenever re-rendering is happening then our component function is called so everytime our a remains 1 or our new timeinterval starts in every second . 
// THus here comes the concept of "LIFECYCLES"




import { useState } from "react";




export default function App(){

return <Counter></Counter>


}



function Counter(){


const [count , setcount]=useState(0);


function increase(){
  
setInterval(() => {
  setcount(count + 1);
}, 1000);



}




return <div>

<h1>{count}</h1>
{increase()}
</div>

}