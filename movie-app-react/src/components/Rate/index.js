import React, { useState } from 'react';

// the callback function is passed to the component as a prop and is called when the user clicks Rate
const Rate = ({ callback }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}

      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
      {useState && <p>Rate: {`${value}`} </p>}
    </div>
  );
};

export default Rate;
