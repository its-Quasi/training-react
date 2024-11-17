import { useCallback, useState } from 'react'
import './App.css'
import { PrimaryButton } from './components'

function App() {

  const [count, setCount] = useState<number>(0);
  const [countParent, setCountParent] = useState<number>(0);


  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const setToOne = () => setCount(1)
  console.log("parent")
  return (
    <div>
      <p>{count}</p>
      <p>{countParent}</p>
      <PrimaryButton parentFn={increment} />
      <button onClick={() => setCountParent(countParent + 1)}>render parent</button>
      <button onClick={setToOne}>one</button>
    </div>
  )
}

export default App
