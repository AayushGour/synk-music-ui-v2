import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterComponent from './components/common/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </div>
  )
}

export default App
