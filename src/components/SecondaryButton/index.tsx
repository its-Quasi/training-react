import { useState } from "react"

export const SecondaryButton = () => {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(p => p + 1)
  }
  console.log("sec children")
  return (
    <button onClick={increase}>
      {`counter: ${count}`}
    </button>
  )
}