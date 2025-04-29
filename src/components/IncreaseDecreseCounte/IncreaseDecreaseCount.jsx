import {useState} from 'react'

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0)
  const IncreaseCount = () =>{
    setCount ((prevCount) =>prevCount +1)
  }
  const DecreaseCount = () =>{
    setCount ((prevCount) =>prevCount -1)
  }
  const reSet = () =>{
    setCount(0)
  }
  return (
    <div>
    <h2>Intial Click Count : {count}</h2> 
    <button onClick={reSet}> reSet </button>
    <button onClick= {IncreaseCount}> Increase</button>
    <button onClick={DecreaseCount}> Decrease</button>
    </div>
  )
}

export default IncreaseDecreaseCount