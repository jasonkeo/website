import React, { useState, useEffect } from 'react';

function Typing() {
  const fullText = 'Jason Keo';
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setText(fullText.slice(0, text.length + 1));
    }, 115); // Change delay as needed

    return () => clearTimeout(timeoutId); // Clean up timeout
  }, [text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCursor((v) => !v);
    }, 100); // Change blink rate as needed

    return () => clearInterval(intervalId); // Clean up interval
  }, []);

  return (
    <div>
      {text}
      <span className={cursor ? 'cursor' : ''}>|</span>
    </div>
  );
}

export default Typing; 


