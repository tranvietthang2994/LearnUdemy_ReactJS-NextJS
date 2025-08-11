export default function Item({ itemObject, onDeleteItem, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObject.packed}
        onChange={() => {
          onTogglePacked(itemObject.id);
        }}
      />

      <span
        style={{
          textDecoration: itemObject.packed ? "line-through" : "none",
        }}
      >
        {itemObject.quantity} {itemObject.description}
      </span>

      <button onClick={() => onDeleteItem(itemObject.id)}>❌</button>
    </li>
  );
}
