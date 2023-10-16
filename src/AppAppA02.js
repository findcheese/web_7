import React from 'react';
import { useState } from 'react';

export default function AppAppA02() {
  const people = [
    { name: '이순신', age: 45, address: '서울시' },
    { name: '익꺽정', age: 65, address: '산속' },
    { name: '홍길동', age: 50, address: '여기저기' },
  ];
  const getPerson = (idx) => people[idx];
  const [idx, setIdx] = useState(0);
  const person = getPerson(idx);
  const { name, age } = getPerson(idx);
  return (
    <div>
      <div>
        {person.name}/{person.age}/{person.address}
      </div>
      <div>
        {name}/{age}
      </div>
      <button onClick={() => setIdx(0)}>0</button>
      <button onClick={() => setIdx(1)}>1</button>
      <button onClick={() => setIdx(2)}>2</button>
    </div>
  );
}
