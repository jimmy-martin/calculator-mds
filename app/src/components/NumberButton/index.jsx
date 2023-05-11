export default function NumberButton({ number, handleClick }) {
  return (
    <>
      {number === 0 ? (
        <button name={number} onClick={handleClick} className="col-span-2 p-2 bg-gray-300 rounded">
          {number}
        </button>
      ) : (
        <button name={number} onClick={handleClick} className="p-2 bg-gray-300 rounded">
          {number}
        </button>
      )}
    </>
  );
}
