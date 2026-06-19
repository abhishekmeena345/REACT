import React from 'react'

const App = () => {

  function btnclikc(){
    console.log("button is clicked")
  }
  function mouseenter(){
    console.log("mouse enter")
  }
  function inputchanging(val){
    console.log(val)
  }
  return (
    <div>
     <input onChange={function(elem){
      inputchanging(elem.target.value)
     }} type="text" />
      <h1>hi abhishek</h1>
      <button onMouseEnter={mouseenter} onClick={btnclikc}>click here</button>
      
    </div>
  )
}

export default App