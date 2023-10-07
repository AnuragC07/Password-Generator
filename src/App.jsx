import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(fn, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
     
    </>
  )
}

export default App
