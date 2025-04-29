import {useState, useEffect} from 'react'

function UseEffectForTitle() {
    const [Counter,setCount] = useState(0);
    useEffect(() =>{
        alert('component is mounted');
    }, []);
    useEffect(() =>{
        document.title = `Counter: ${Counter}`
    }, [Counter]);
    const incremant = ()=>{
        setCount((prevCount) => prevCount + 1)
    }
   
  return (
    <div>
        <h2> Title update</h2>
        <button onClick = {incremant}> Click</button>
        <h3> Count : {Counter}</h3>

    </div>
  )
}

export default UseEffectForTitle