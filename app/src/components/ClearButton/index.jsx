export default function ClearButton({ name, handleClick }) {
  return (
    <button
      name={name}
      onClick={handleClick}
      className="col-span-2 p-2 bg-red-500 text-white rounded"
    >
      {name}
    </button>
  );
}
