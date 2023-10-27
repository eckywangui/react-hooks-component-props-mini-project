
import React from 'react';

export default function About({ blogImage, aboutText }) {
  
  const imageSrc = blogImage || 'https://via.placeholder.com/215';

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}
