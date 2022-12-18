import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [d, setD] = useState(false)

  function updateCount() {
    setCount((x) => x+1)
  }

  const updateCountArrow = () => {
    console.log("Callback function called...")
  }

  console.log("Count: ", count)


  return <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <button onClick={updateCount}>Update Count</button>
    <button onClick={() => setD((x) => !x)}>Render Callback Component</button>
    <CouterPresentor count={count} customObject={{
      "name": "swapnil"
    }}/>
    <UseCallbackExample updateCountArrow={updateCountArrow} />
  </div>
}

const UseCallbackExample = memo((props) => {
  console.log("Redndered becase of reference change of arrow function...")
  return null
})

const CouterPresentor = memo((props) => {
  const {count} = props

  useEffect(() => {
    console.log("CounterPresentor Rendered...")
  })

  return <div>
    {count}
  </div>
}, (prev, next) => {
  return prev === next
})

export default App;
