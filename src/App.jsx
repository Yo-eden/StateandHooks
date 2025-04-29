import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyCounter from './components/Mycounter/MyCounter'
import IncreaseDecreaseCount from './components/IncreaseDecreseCounte/IncreaseDecreaseCount'
import UseEffectForTitle from './components/UseEffectForTitle/UseEffectForTitle'


function App() {
  
  return (
    <>
      <MyCounter/>
      <IncreaseDecreaseCount/>
      <UseEffectForTitle/>
    </>
  )
}

export default App
