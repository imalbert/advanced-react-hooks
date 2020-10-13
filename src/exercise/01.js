// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  function countReducer(state, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.step
        }
      default:
        return state
    }
  }

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
