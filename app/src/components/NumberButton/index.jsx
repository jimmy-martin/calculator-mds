export default function NumberButton({ number, handleClick }) {
  return (
    <button name={number} onClick={handleClick} className="p-2 bg-gray-300 rounded">
      {number}
    </button>
  );
}
