import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {TodoItemsClient, CreateTodoItemCommand} from '@testnpmclient/api-npm-client';
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const client = new TodoItemsClient("https://test.com",axios);
  useEffect(() => {
    client.createTodoItem({title: "rfrf", listId: 2} as CreateTodoItemCommand).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
