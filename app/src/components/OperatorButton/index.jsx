export default function OperatorButton({ operator, handleClick }) {
  return (
    <>
      {operator === '=' ? (
        <button
          name={operator}
          onClick={handleClick}
          className="col-span-4 p-2 bg-orange-500 text-white rounded"
        >
          {operator}
        </button>
      ) : (
        <button
          name={operator}
          onClick={handleClick}
          className="p-2 bg-orange-500 text-white rounded"
        >
          {operator}
        </button>
      )}
    </>
  );
}
