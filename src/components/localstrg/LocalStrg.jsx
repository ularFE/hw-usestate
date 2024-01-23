import React, { useState, useEffect } from 'react';

const LocalStrg = () => {
  const [inputVal, setInputVal] = useState(localStorage.getItem('inputVal') || "");

  useEffect(() => {
    localStorage.setItem('inputVal', inputVal);
    console.log( inputVal.length);
  }, [inputVal]);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='localStorage & length' value={inputVal} onChange={handleInputChange} />
    </div>
  );
}

export default LocalStrg;

