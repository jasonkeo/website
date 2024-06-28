import { Certificate } from 'crypto';
import React, { useState, useEffect } from 'react';


async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));


  
}

function Typing() {
  const fullText = 'Jason Keo';
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState("|");
  const [checkblink, setCheckblink] = useState(0);

  
  const [wait, setWait] = useState(false);

  useEffect(() => {
    (async () => {
      await sleep(1000); // Sleep for 5 seconds
      setWait(true);
    })();
  }, []);

  useEffect(() => {
    if(wait) {
      const timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 90); // Change delay as needed

      return () => clearTimeout(timeoutId); // Clean up timeout
    }
  }, [text,wait]);



  
  
  
  useEffect(() => {
    if (wait) {
      const intervalId = setInterval(() => {
        if (checkblink < 9) {
          setCursor((prevCursor: string) => prevCursor === "|" ? "" : "|");
          setCheckblink(checkblink + 1); // Update checkblink using the state setter function
        } else {
          setCursor((prevCursor: string) => prevCursor === "" ? "" : "");
        }
      }, 600); // Change blink rate as needed
  
      return () => {clearInterval(intervalId)}; // Clean up interval
    }
  });

  return (
    <div id="inner-box">
      
     {text}
      <span>{cursor}</span>
    </div>
  );
}

export default Typing;


