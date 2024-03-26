import { useState } from 'react'
import zeldaLinkLogo from '/zelda-link.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/semaperez" target="_blank">
          <img src={zeldaLinkLogo} className="logo react" alt="zelda-link logo" />
        </a>
      </div>
      <h1>curriculum semaperez</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
