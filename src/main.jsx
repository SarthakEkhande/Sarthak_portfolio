import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Body from './components/Body.jsx'
import Aboutme from './components/Aboutme.jsx'
import Contactus from './components/Contactus.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Project from './components/Project.jsx'


const AppLayout=()=>{
  return(
    <div>
      <Header/>
      
      
      <Outlet/>

    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: 
          <div>
           <Body/>
           <Aboutme/>
           <Skills/>
           {/* <Contactus/> */}
           <Education/>
           <Project/>
           <Contactus/>
          </div> ,
        
      },
      {
        path: "/about",
        element: <Aboutme/>,
      },
      {
        path: "/contact",
        element: <Contactus/>,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/education",
        element: <Education/>,
      },
      {
        path: "/project",
        element: <Project/>,
      },
      

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
