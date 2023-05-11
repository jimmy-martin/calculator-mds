import { useState } from 'react';
import InputField from '../InputField';
import NumberSection from '../NumberSection';
import OperatorButton from '../OperatorButton';
import NumberButton from '../NumberButton';
import ClearButton from '../ClearButton';

export default function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (evt) => {
    if (result === 0) {
      setResult(evt.target.name);
      return;
    }

    setResult(result.concat(evt.target.name));
  };

  const calculate = () => {
    try {
      setResult(evalExpression(result));
    } catch (error) {
      setResult('Erreur');
    }
  };

  const clearAll = () => {
    setResult(0);
  };

  const clearLast = () => {
    if (result.length > 0) {
      setResult(result.slice(0, -1));
    } else {
      setResult('');
    }
  };

  const evalExpression = (expression) => {
    const result = eval(expression);
    return Number.isFinite(result) ? result.toString() : 'Erreur';
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <InputField value={result} />
      <div className="grid grid-cols-4 gap-2">
        <ClearButton name={`C`} handleClick={clearAll} />
        <ClearButton name={`<=`} handleClick={clearLast} />
        <NumberSection min={1} max={3} handleClick={handleClick} />
        <OperatorButton operator="+" handleClick={handleClick} />
        <NumberSection min={4} max={6} handleClick={handleClick} />
        <OperatorButton operator="-" handleClick={handleClick} />
        <NumberSection min={7} max={9} handleClick={handleClick} />
        <OperatorButton operator="*" handleClick={handleClick} />
        <NumberButton number={0} handleClick={handleClick} />
        <NumberButton number="." handleClick={handleClick} />
        <OperatorButton operator="/" handleClick={handleClick} />
        <OperatorButton operator="=" handleClick={calculate} />
      </div>
    </div>
  );
}
