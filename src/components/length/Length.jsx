import React, { useState, useEffect } from 'react';

const InputLengthTracker = () => {
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    console.log( inputVal.length);
  }, [inputVal]);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='length input' value={inputVal} onChange={handleInputChange} />
    </div>
  );
}

export default InputLengthTracker;

