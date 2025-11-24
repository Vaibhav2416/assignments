import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1) There will be div which display and hide with button click
 
// 2) There will a div and the background color of div will change on button click
 
function App() {
  const [toggle, setToggle] = useState(false)

  const colors=['red','green','teal']
  const [index,setIndex]=useState(0)
  let i=0
  const changeColor=()=>{
    let next = index + 1;

    if (next >= colors.length) {
      next = 0;
    }

    setIndex(next);
  }
  
  return (
    <div style={{
      width:"90%",
      border:"1px solid black",
      margin:"auto",
      height:"90vh",
      display:"flex",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:"center"
    }}>
    {
      toggle && <div style={{border: "1px solid black", backgroundColor:colors[index], height:"300px",width:"500px"}}>
      </div>
    }
    <button style={{padding:"20px",fontSize:"20px"}} onClick={()=>setToggle(!toggle)}>Toggle</button>
    <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default App
