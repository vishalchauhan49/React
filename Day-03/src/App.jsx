
import { useState } from "react";
import { useEffect } from "react";


export default function App(){

return <Counter></Counter>


}


// At the time of mounting , re-rendering , unmounting 
function Counter(){

const [count , setcount]=useState(0);

/* 
     useEffect(function(){
        setInterval(() => {
          setcount(count + 1);  // Now we can't use count as this now .
     }, 1000);
   },[]);    // []:- dependency array 

*/

  useEffect(function(){
     console.log("hello");  // will print only 1 time after mounting
     
       setInterval(function(){
          setcount(count => count + 1);
    }, 1000);

  },[]);




return <div>
<h1>{count}</h1>
</div>

}