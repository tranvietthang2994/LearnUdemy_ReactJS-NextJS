import React, { useState } from "react";
export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Chặn hành vi tải lại trang (trong TH này là from submit)

    if (!description || !quantity) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
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
