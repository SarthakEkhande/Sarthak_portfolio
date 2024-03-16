// import { json } from 'express/lib/response'
import React,{useEffect,useState} from 'react'

const Userinfo = () => {
  const[userdata,setuserdata]=useState(null)

  const fetchdata=async()=>{
    const data= await fetch("https://api.github.com/users/sarthakekhande")
    const json=await data.json()
    console.log(json);
    setuserdata(json)
  }
  
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    <div>
   <img className="transition-transform transform hover:scale-110 bg-slate-900 rounded-3xl " src={userdata?.avatar_url} ></img>
    </div>
  )
}

export default Userinfo