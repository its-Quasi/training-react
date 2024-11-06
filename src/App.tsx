import { useCallback, useState } from 'react'
import './App.css'
import { PrimaryButton } from './components'
import { SecondaryButton } from './components/SecondaryButton'


function App() {
  const [count, setCount] = useState(0)

  const increase = useCallback
    (
      () => {
        setCount((prev) => prev + 1);
      }, [setCount]
    )


  console.log("parent")
  return (
    <div>
      <PrimaryButton label={`Counter: ${count}`} parentFn={increase} />
      <SecondaryButton />
    </div>
  )
}

export default App
