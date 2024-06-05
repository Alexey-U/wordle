import React from 'react';
import { useGlobalContext } from './context';

const Keyboard = () => {
  const {addToLine, lines, setLines, currentLine, checkWordInData, delChar} = useGlobalContext();
  return (
  <>
    <div className="keyboard">
      <div className="keyboard-first-line">
        <button className="char-bth" onClick={() => addToLine('Q')}>Q</button>
        <button className="char-bth" onClick={() => addToLine('W')}>W</button>
        <button className="char-bth" onClick={() => addToLine('E')}>E</button>
        <button className="char-bth" onClick={() => addToLine('R')}>R</button>
        <button className="char-bth" onClick={() => addToLine('T')}>T</button>
        <button className="char-bth" onClick={() => addToLine('Y')}>Y</button>
        <button className="char-bth" onClick={() => addToLine('U')}>U</button>
        <button className="char-bth" onClick={() => addToLine('I')}>I</button>
        <button className="char-bth" onClick={() => addToLine('O')}>O</button>
        <button className="char-bth" onClick={() => addToLine('P')}>P</button>
      </div>
      <div className="keyboard-second-line">
        <button className="char-bth" onClick={() => addToLine('A')}>A</button>
        <button className="char-bth" onClick={() => addToLine('S')}>S</button>
        <button className="char-bth" onClick={() => addToLine('D')}>D</button>
        <button className="char-bth" onClick={() => addToLine('F')}>F</button>
        <button className="char-bth" onClick={() => addToLine('G')}>G</button>
        <button className="char-bth" onClick={() => addToLine('H')}>H</button>
        <button className="char-bth" onClick={() => addToLine('J')}>J</button>
        <button className="char-bth" onClick={() => addToLine('K')}>K</button>
        <button className="char-bth" onClick={() => addToLine('L')}>L</button>
      </div>
      <div className="keyboard-third-line">
        <button className="char-bth" style={{backgroundColor:'red'}} onClick={() => delChar()}>DEL</button>
        <button className="char-bth" onClick={() => addToLine('Z')}>Z</button>
        <button className="char-bth" onClick={() => addToLine('X')}>X</button>
        <button className="char-bth" onClick={() => addToLine('C')}>C</button>
        <button className="char-bth" onClick={() => addToLine('V')}>V</button>
        <button className="char-bth" onClick={() => addToLine('B')}>B</button>
        <button className="char-bth" onClick={() => addToLine('N')}>N</button>
        <button className="char-bth" onClick={() => addToLine('M')}>M</button>
        <button className="char-bth" onClick={() => checkWordInData()}>Enter</button>
      </div>
    </div>
  </>
  );
}

export default Keyboard;