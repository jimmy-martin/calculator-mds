export default function OperatorButton({ operator, handleClick }) {
  return (
    <button name={operator} onClick={handleClick} className="p-2 bg-orange-500 text-white rounded">
      {operator}
    </button>
  );
}
