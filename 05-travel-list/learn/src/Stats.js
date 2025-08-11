export default function Stats({ items }) {
  const numItems = items.length;

  return (
    <footer className="stats">
      <em>You have {numItems} items on your lists.</em>
    </footer>
  );
}
