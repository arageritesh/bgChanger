import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center
       bottom-12 inset-x-0 px-2'><div className='flex flex-wrap justify-center 
       gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
        <button 
        onClick={()=>setcolor("red")}
         className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "red"}}>Red</button>
        <button 
        onClick={()=>setcolor("green")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "green"}}>Green</button>
        <button 
        onClick={()=>setcolor("yellow")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "yellow"}}>Yellow</button>
        <button 
        onClick={()=>setcolor("blue")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "blue"}}>Blue</button>
        <button 
        onClick={()=>setcolor("orange")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "orange"}}>Orange</button>
        <button 
        onClick={()=>setcolor("pink")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "pink"}}>Pink</button>
        <button 
        onClick={()=>setcolor("violet")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "violet"}}>Violet</button>
        <button 
        onClick={()=>setcolor("grey")}
        className='outline-none  px-4 py-1 
       rounded-full shadow-sm ' style={{backgroundColor : "grey"}}>Grey</button>
        </div></div>
    </div>
  )
}

export default App
