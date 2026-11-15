
// Applying conditional rendering of a counter we made . 
// Note :- we havent used " DEPENDENCY ARRAY " till now.


import { useState } from "react";
import { useEffect } from "react";


export default function App1(){

// we created state variables     
let [ counterVisibility,setcounterVisibility]= useState(true);


useEffect(function(){

    setInterval(function(){
         setcounterVisibility(c =>!c)
         console.log("inside setInterval");
    }, 5000);

},[]);
 

return <div>
    hii
    {counterVisibility ? <Counter></Counter>:null} 
    </div>
    
}



function Counter(){

const [count , setcount]=useState(0);


  useEffect(function(){     
    console.log("Mounted ");  // will print only 1 time after mounting
    let clock=setInterval(function(){
        console.log(clock);
        console.log("inside clock");  
          setcount(count => count + 1);
    }, 1000);


   return function cleanup(){
    console.log("unmounting");
    clearInterval(clock);
   }
  },[]);




return <div>
<h1>{count}</h1>
</div>

}