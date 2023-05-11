import NumberButton from '../NumberButton';

export default function NumberSection({ min, max, handleClick }) {
  const buttons = [];
  for (let i = min; i <= max; i++) {
    buttons.push(<NumberButton key={i} number={i} handleClick={handleClick} />);
  }

  return <>{buttons}</>;
}
