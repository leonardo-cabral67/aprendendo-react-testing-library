import { useState } from "react";

function App() {
  const [newName, setNewName] = useState<string>("");
  const [list, setList] = useState<string[]>(["Leo", "Pedro", "Gabriel"]);

  function addToList(): void {
    setTimeout(() => {
      setList((state) => [...state, newName]);
    }, 500);
  }

  function changeNewName(value: string) {
    return setNewName(value);
  }

  function removeItem(name: string): void {
    setTimeout(() => {
      setList((state) => state.filter((item) => item !== name));
    }, 500);
  }

  return (
    <div>
      <input
        value={newName}
        type="text"
        placeholder="Type a new name"
        onChange={(e) => changeNewName(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
