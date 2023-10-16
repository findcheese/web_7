import React from 'react';
import { useState } from 'react';

export default function AppAppA05() {
  const titles = ['가', '나', '다'];
  return (
    <div>
      <div>A팀결과</div>
      <Board />

      <div>B팀결과</div>
      <Board />

      {titles.map((title) => (
        <div>
          <div>{title}팀결과</div>
          <Board />
        </div>
      ))}
    </div>
  );
}
const Board = () => (
  <div style={{ fontSize: 30 }}>
    <Score />:<Score />
  </div>
);

const Score = ({ max = 5 }) => {
  const [value, setValue] = useState(0);

  return (
    <span
      style={{ fontSize: 30, color: value == max ? 'red' : '' }}
      onClick={() => {
        if (value < max) setValue(value + 1);
      }}
    >
      {' '}
      {value.toString().padStart(2, '0')}
    </span>
  );
};
