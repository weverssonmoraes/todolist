import { useState } from "react";
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [itensList, setItensList] = useState([])

  const handleChangeInput = (e) => {
    const inputTask = e.target.value;

    setTask(inputTask)
  }

  const handleAddItemList = (e) => {
    if (!task) {
      return
    };

    e.preventDefault()

    setItensList([...itensList, task])

    setTask('')
  }

  return (
    <div>
      <h1>To do List</h1>
      <form onSubmit={handleAddItemList}>
        <input type="text" value={task} onChange={handleChangeInput} placeholder='Digite sua task' />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="list">
        {itensList.map((index, item) => (
            <div className="god">
              <li key={item}>{index}</li>
              <input type="checkbox" name="" id="" />
            </div>
          ))}
      </ul>
    </div>
  )
}

export default App