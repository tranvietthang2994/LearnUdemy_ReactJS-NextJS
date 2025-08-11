import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onTogglePacked,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("description");

  let sortedItems;

  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "input") {
    sortedItems = [...items];
  } else if (sortBy === "quantity") {
    sortedItems = [...items].sort((a, b) => a.quantity - b.quantity);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((itemData) => (
          <Item
            itemObject={itemData}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          ></Item>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="quantity">Sort by quantity</option>
        </select>

        <button onClick={onClear}>Clear list ❌</button>
      </div>
    </div>
  );
}
