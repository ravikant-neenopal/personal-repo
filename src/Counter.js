import React, { useState } from 'react'
import Button from './components/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  return (
    <>
      <h2 className="app-header">
        Live Counter value: {count}
      </h2>
      <main>
        <Button className='increment' onClick={increment} text = "+" />
        <Button className='decrement' onClick={decrement} text = "-" />
      </main>
    </>
  )
}

export default Counter