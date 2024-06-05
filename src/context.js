import React, { useState, useContext, useEffect } from 'react';
import data from './data';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [lines, setLines] = useState({
        firstLine : '',
        secondLine : '',
        thirdLine : '',
        fourthLine : '',
        fifthLine : '',
        sixLine : '',
    });
    const [currentLine, setCurrentLine] = useState(1);
    const [words, setWords] = useState(data || 'none');
    const [secretWord, setSecretWord] = useState(words[getRandomArbitrary(0,499)] || 'seven');
    const [notFound, setNotFound] = useState(false);
    const [matchChars, setMatchChars] = useState([]);
    const [sameIndexChars, setSameIndexChars] = useState([]);
    const [notMatchChars, setNotMatchChars] = useState([]);
    const [success, setSuccess] = useState(false);

    // находим случайное число
    function getRandomArbitrary(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
    // функция выявляет буквы в секретном слове.
    const asignLine = () => {
      let l = 'firstLine';
      if(currentLine === 2) {return 'secondLine';}
      if(currentLine === 3) {return 'thirdLine';}
      if(currentLine === 4) {return 'fourthLine';}
      if(currentLine === 5) {return 'fifthLine';}
      if(currentLine === 6) {return 'sixLine';}
      return l;
    }
    // Находим похожие и не похожие буквы
    const checkSimilarChars = () => {
      let l = asignLine(), exists = [], non_exists = [], same = [];
      lines[l].toLowerCase().split('').map((c,i) => {
        if(secretWord.indexOf(c) > -1){ 
          exists.push(c);
          exists = [...new Set(exists.concat(matchChars))]; 
          setMatchChars(exists);
        } else { 
          non_exists.push(c);
          non_exists = [...new Set(non_exists.concat(notMatchChars))];
          setNotMatchChars(non_exists); 
        }
        if(secretWord[i] === c.toLowerCase()){
          same.push(c);
          same = [...new Set(same.concat(sameIndexChars))];
          setSameIndexChars(same);
        }
      });
    }

    // ищем слово в словаре
    function checkWordInData() {
      let l = asignLine();
      if(words.indexOf(lines[l].toLowerCase()) > -1) {
        checkSimilarChars();
        let newLine = currentLine + 1;
        setCurrentLine(newLine);
      } else {
        setNotFound(true);
        setTimeout(() => {
          setNotFound(false);
        },1500);
      }
      if(lines[l].toLowerCase() === secretWord){
        setSuccess(true);
      }
    }

    // добавляем букву в ряд
    const addToLine = (char) => {
      if(currentLine === 1) {
        setLines({...lines, ['firstLine'] : (lines.firstLine+=char).slice(0,5)});
      }
      if(currentLine === 2) {
        setLines({...lines, ['secondLine'] : (lines.secondLine+=char).slice(0,5)});
      }
      if(currentLine === 3) {
        setLines({...lines, ['thirdLine'] : (lines.thirdLine+=char).slice(0,5)});
      }
      if(currentLine === 4) {
        setLines({...lines, ['fourthLine'] : (lines.fourthLine+=char).slice(0,5)});
      }
      if(currentLine === 5) {
        setLines({...lines, ['fifthLine'] : (lines.fifthLine+=char).slice(0,5)});
      }
      if(currentLine === 6) {
        setLines({...lines, ['sixLine'] : (lines.sixLine+=char).slice(0,5)});
      }
    }

    // удаляем букву из ряда
    const delChar = () => {
      let char = '';
      if(currentLine === 1) {
        char = lines.firstLine.slice(0, lines.firstLine.length-1);
        setLines({...lines, ['firstLine'] : (lines.firstLine=char)});
      }
      if(currentLine === 2) {
        char = lines.secondLine.slice(0, lines.secondLine.length-1);
        setLines({...lines, ['secondLine'] : (lines.secondLine=char)});
      }
      if(currentLine === 3) {
        char = lines.thirdLine.slice(0, lines.thirdLine.length-1);
        setLines({...lines, ['thirdLine'] : (lines.thirdLine=char)});
      }
      if(currentLine === 4) {
        char = lines.fourthLine.slice(0, lines.fourthLine.length-1);
        setLines({...lines, ['fourthLine'] : (lines.fourthLine=char)});
      }
      if(currentLine === 5) {
        char = lines.fifthLine.slice(0, lines.fifthLine.length-1);
        setLines({...lines, ['fifthLine'] : (lines.fifthLine=char)});
      }
      if(currentLine === 6) {
        char = lines.sixLine.slice(0, lines.sixLine.length-1);
        setLines({...lines, ['sixLine'] : (lines.sixLine=char)});
      }
    }

    // меняем цвет
useEffect(() => {
  const span_count = (parseInt(currentLine-1) * 5 - 5 > 0) ? parseInt(currentLine-1) * 5 - 5 : 0;
  const span = document.getElementsByTagName('span');
  for (let i = span_count; i < span.length; i++) {
    if(matchChars.indexOf(span[i].innerHTML.toLowerCase()) > -1) {
      span[i].style.background = 'orange';
    }
  }
  // change for green color in display
  for (let i = span_count; i < span.length; i++) {
    if(sameIndexChars.indexOf(span[i].innerHTML.toLowerCase()) > -1) {
      span[i].style.background = 'green';
    }
  }
  // change color for keyboard
  const el = document.getElementsByClassName('char-bth');
  for (let i = 0; i < el.length; i++) {
    if(matchChars.indexOf(el[i].innerHTML.toLowerCase()) > -1) {
      el[i].style.background = 'orange';
    }
  }
  for (let i = 0; i < el.length; i++) {
    if(notMatchChars.indexOf(el[i].innerHTML.toLowerCase()) > -1) {
      el[i].style.background = 'black';
      el[i].style.color = 'lightgray';
    }
  }
  for (let i = 0; i < el.length; i++) {
    if(sameIndexChars.indexOf(el[i].innerHTML.toLowerCase()) > -1) {
      el[i].style.background = 'green';
    }
  }
}, [matchChars, notMatchChars]);


  return (
    <AppContext.Provider
      value={{ addToLine, lines, setLines, currentLine, checkWordInData, notFound, delChar, success }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
