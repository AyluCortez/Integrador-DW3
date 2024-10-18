import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import TaskList from './TaskList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <TaskList />
    

  )
}
export default App;

