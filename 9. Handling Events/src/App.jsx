
import './App.css'

function App() {

  let onClick=()=>{
    console.log("Hi I Am On Click Button")
  }
  let keyDown=()=>{
    console.log("you pushes a keyboard key")
  }
  let Loded=()=>{
    console.log('you browser is load')
  }
  let MouseOut=()=>{
    console.log('this is mouse out')
  }
  let MouseOver=()=>{
    console.log('this is mouse over')
  }
  let OnChange=()=>{
    console.log('on change function is run')
  }

  return (
    <>
    <div onLoad={Loded}>
      <button onClick={onClick}>OnClick Events</button>
      <input type="text" name="hi" onKeyDown={keyDown}/>
      <div className='mouse1' onMouseOut={MouseOut}>This is Mouse Out</div>
      <div className='mouse2' onMouseOver={MouseOver}>This is Mouse Over</div>
      <input type="email" name="" id="" onChange={OnChange}/>
      <div className="dummy" onCli>hi!</div>
    </div>
    </>
  )
}

export default App
