import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let name="abhishek meena "
  return (
     <>
     <h1>Hi {name}</h1>
     <p> i am learning react</p>
     <h1>Movies 🎬</h1>
     <Card  name="kgf" rating="9.5"/>
     <Card  name="pushpa" rating="8.2"/>
     <Card  name="rrr" rating="9.0"/>

     <h1>Count:{count}</h1>
     <button onClick={()=> setCount(count+1)} > Increase</button>

     <h1>Count:{count}</h1>
     <button onClick={()=> setCount(count-1)} > Decrease</button>
     <h1>Count:{count}</h1>
     <button onClick={()=> setCount(0)} > reset</button>
     </>
  )
}

export default App
