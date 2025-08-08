import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Bags", quantity: 10, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );

  function Logo() {
    return <h1>🌴 Travel List 💼</h1>;
  }

  function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
      e.preventDefault(); // Chặn hành vi tải lại trang (trong TH này là from submit)

      if (!description || !quantity) return;
      const newItem = {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      };

      setDescription("");
      setQuantity(1);

      console.log("New item added:", newItem);
    }

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>

        <select
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
        >
          {/* Tạo một mảng từ 1 đến 20 và map qua nó để tạo các option */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <button>Add</button>
      </form>
    );
  }

  function PackingList() {
    return (
      <div className="list">
        <ul>
          {initialItems.map((itemData) => (
            <Item itemObject={itemData}></Item>
          ))}
        </ul>
      </div>
    );
  }

  function Item({ itemObject }) {
    return (
      <li>
        <span
          style={{
            textDecoration: itemObject.packed ? "line-through" : "none",
          }}
        >
          {itemObject.quantity} {itemObject.description}
        </span>
        <button>❌</button>
      </li>
    );
  }

  function Stats() {
    return (
      <footer className="stats">
        <em>You have X items on your lists.</em>
      </footer>
    );
  }
}
