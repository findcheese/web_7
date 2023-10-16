import React from 'react';
import { useState } from 'react';

export default function AppAppA04() {
  return (
    <div>
      <Score />: <Score />
    </div>
  );
}

const Score = ({ max = 5 }) => {
  const [value, setValue] = useState(0);

  return (
    <span
      style={{ fontSize: 30, color: value == max ? 'red' : '' }}
      onClick={() => {
        if (value < max) setValue(value + 1);
      }}
    >
      {value.toString().padStart(2, '0')}
    </span>
  );
};
