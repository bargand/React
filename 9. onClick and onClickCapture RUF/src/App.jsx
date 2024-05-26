import './App.css'

function App() {

  let ParentClick = ()=>{
    alert("Parent was clicked")
  }
  let Child1Click = (e)=>{
    alert("Child1Click was clicked")
    e.stopPropagation()
  }
  let Child2Click = (e)=>{
    alert("Child2Click was clicked")
    e.stopPropagation()
  }

  return (
    <>
    <div className='center'>
    <div className="parent" onClick={ParentClick}>
      <div className="child1" onClick={Child1Click}>
      <div className="child2" onClick={Child2Click}></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
