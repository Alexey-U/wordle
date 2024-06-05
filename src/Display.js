import React, { useState } from 'react';
import { useGlobalContext } from './context';


const Display = () => {
    const {addToLine, lines, setLines, notFound, success} = useGlobalContext();

  return (
  <>
    <div className="display">
        {notFound === true &&  <div className="not-found">Word not found!</div>}
        {success === true &&  <div className="success">Success!</div>}
        <div className="firstLine">
            <span>{lines['firstLine'][0] || '   '}</span>
            <span>{lines.firstLine[1] || '   '}</span>
            <span>{lines.firstLine[2] || '   '}</span>
            <span>{lines.firstLine[3] || '   '}</span>
            <span>{lines.firstLine[4] || '   '}</span>
        </div>
        <div className="secondLine">
            <span>{lines.secondLine[0] || '   '}</span>
            <span>{lines.secondLine[1] || '   '}</span>
            <span>{lines.secondLine[2] || '   '}</span>
            <span>{lines.secondLine[3] || '   '}</span>
            <span>{lines.secondLine[4] || '   '}</span>
        </div>
        <div className="thirdLine">
            <span>{lines.thirdLine[0] || '   '}</span>
            <span>{lines.thirdLine[1] || '   '}</span>
            <span>{lines.thirdLine[2] || '   '}</span>
            <span>{lines.thirdLine[3] || '   '}</span>
            <span>{lines.thirdLine[4] || '   '}</span>
        </div>
        <div className="fourthLine">
            <span>{lines.fourthLine[0] || '   '}</span>
            <span>{lines.fourthLine[1] || '   '}</span>
            <span>{lines.fourthLine[2] || '   '}</span>
            <span>{lines.fourthLine[3] || '   '}</span>
            <span>{lines.fourthLine[4] || '   '}</span>
        </div>
        <div className="fifthLine">
            <span>{lines.fifthLine[0] || '   '}</span>
            <span>{lines.fifthLine[1] || '   '}</span>
            <span>{lines.fifthLine[2] || '   '}</span>
            <span>{lines.fifthLine[3] || '   '}</span>
            <span>{lines.fifthLine[4] || '   '}</span>
        </div>
        <div className="sixLine">
            <span>{lines.sixLine[0] || '   '}</span>
            <span>{lines.sixLine[1] || '   '}</span>
            <span>{lines.sixLine[2] || '   '}</span>
            <span>{lines.sixLine[3] || '   '}</span>
            <span>{lines.sixLine[4] || '   '}</span>
        </div>
    </div>
  </>);
}
export default Display;
