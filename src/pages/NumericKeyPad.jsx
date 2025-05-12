import React, { useState } from 'react';

function NumericKeyPad() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="max-w-xs mx-auto p-4 border rounded shadow">
      <input
        type="text"
        value={input}
        readOnly
        className="form-control mb-3"
      />
      <div className="grid grid-cols-3 gap-2">
        {[1,2,3,4,5,6,7,8,9].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num.toString())}
            className="btn btn-outline-primary"
          >
            {num}
          </button>
        ))}
        <button onClick={handleClear} className="btn btn-outline-danger">C</button>
        <button onClick={() => handleClick('0')} className="btn btn-outline-primary">0</button>
        <button onClick={handleDelete} className="btn btn-outline-warning">⌫</button>
      </div>
    </div>
  );
}

export default NumericKeyPad;
