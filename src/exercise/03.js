// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

const CounterContext = React.createContext()

function CountProvider(props) {
  const value = React.useState(0)

  return (
    <CounterContext.Provider value={value} {...props} />
  )
}

function useCount() {
  const value = React.useContext(CounterContext)

  if (!value) {
    throw new Error('useCount must be used within a CountProvider.')
  }

  return value
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
