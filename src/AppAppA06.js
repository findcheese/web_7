import React from 'react';
import { useState } from 'react';

export default function AppAppA06() {
  const images = [
    'https://image.yes24.com/goods/103385968/XL',
    'https://image.aladin.co.kr/product/25852/5/letslook/K712737267_f.jpg',
    'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791168767898.jpg',
    'https://image.aladin.co.kr/product/32135/25/cover500/k212834306_1.jpg',
  ];

  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
}

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  return (
    <div onClick={() => setIndex(index + 1)}>
      <img src={images[index % images.length]} height="300" />
    </div>
  );
};
