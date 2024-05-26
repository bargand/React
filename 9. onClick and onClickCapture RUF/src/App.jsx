import './App.css'

function App() {

  let ParentClick = ()=>{
    alert("Parent was clicked")
  }
  let Child1Click = ()=>{
    alert("Child1Click was clicked")
  }
  let Child2Click = ()=>{
    alert("Child2Click was clicked")
  }

  return (
    <>
    <div className='center'>
    <div className="parent" onClickCapture={ParentClick}>
      <div className="child1" onClickCapture={Child1Click}>
      <div className="child2" onClickCapture={Child2Click}></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
