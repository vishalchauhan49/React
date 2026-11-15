import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App1 from './App1.jsx' // we can use any one of them at a time because both are having same component name Counter and if we use both then it will give error because of same name of component.
import App2 from './App2.jsx'
createRoot(document.getElementById('root')).render(

    
    <App2 />
)
// now whats he problem is that we are using both App and App1 at a time and both are having same component name Counter and if we use both then it will give error because of same name of component. so we can use any one of them at a time.
// how to use one at a time ? 
// we can use one at a time by commenting the other one. so we can use any one of them at a time because both are having same component name Counter and if we use both then it will give error because of same name of component. so we can use any one of them at a time.