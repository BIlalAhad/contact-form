
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data,setData]=useState({
    username:"",
    email:"",
    passward:"",
    conformpassward:"",
  });
 const handle = (event) => {
  const name = event.target.name;
   const value = event.target.value;

   setData((prev)=>{
    return {...prev,[name]:value}
   });

 }
  return (
    <div className="App h-[100vh] grid sm:place-items-center justify-self-center bg-gray-200 ">
     <form action="" className="bg-gray-800 shadow-2xl border-t-8 border-blue-800 w-96 grid gap-4 rounded-lg text-gray-500  max-w-5xl p-8">
     <h1 className=" text-white font-bold text-2xl mb-5 font-serif ">Register</h1>
     <input type="text" value={data.username} placeholder="Name" name="username" id="" className=" text-sm rounded-md border-2 h-9 border-gray-400" onChange={handle}/>
     <input type="email" value={data.email} placeholder="Email" name="email" id="" className=" text-sm rounded-md border-2 h-9 border-gray-400" onChange={handle} />
     <input type="passward" value={data.passward} placeholder="passward" name="passward" id="" className="text-sm rounded-md border-2 h-9 border-gray-400" onChange={handle} />
     <input type="passward" value={data.conformpassward} placeholder="conformpassward" name="conform passward" id="" className="text-sm rounded-md border-2 h-9 border-gray-400" onChange={handle} />
     <button className="bg-blue-900  hover:brightness-75 rounded-lg  w-32 h-9 text-white">
        Create Account
     </button>
     <p className='italic '>{`My name is ${data.username}  and my email is ${data.email}`}</p>
     </form>
    </div>
  );
}

export default App;
