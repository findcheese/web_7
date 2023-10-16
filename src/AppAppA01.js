import React from 'react';
import { useState } from 'react';

export default function AppAppA01() {
  const getFun1 = () => {
    return { name: '이순신', age: 56, address: '서울시' };
  };
  const getFun2 = () => {
    return ['홍길동', 78, '여기저기'];
  };
  const { address, age, name } = getFun1();
  const [age2, name2] = getFun2();
  return (
    <div>
      <div>
        {name}/{age}/{address}
      </div>
      <div>
        {name2}/{age2}
      </div>
    </div>
  );
}
