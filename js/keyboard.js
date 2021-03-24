import {
  modal,
  keyboardContainer,
  input,
} from './constants.js';

function generateKeyboard() {
  const inputWindow = document.getElementById('user-search');

  /* prevent from loosing focus */
  document.addEventListener('click', () => {
    document.getElementById('user-search').focus();
  });

  /* creating keyboard rows */
  const sectionOne = document.createElement('section');
  sectionOne.className = 'first-row';
  keyboardContainer.appendChild(sectionOne);


  const firstRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  firstRow.forEach((el) => {
    const button = document.createElement('button');
    button.innerHTML = el;
    sectionOne.appendChild(button);
  });

  const sectionTwo = document.createElement('section');
  sectionTwo.className = 'second-row';
  keyboardContainer.appendChild(sectionTwo);

  const secondRow = ['Tab⇄', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
  secondRow.forEach((el) => {
    const button = document.createElement('button');
    button.innerHTML = el;
    sectionTwo.appendChild(button);
  });

  const sectionThree = document.createElement('section');
  sectionThree.className = 'third-row';
  keyboardContainer.appendChild(sectionThree);

  const thirdRow = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'];
  thirdRow.forEach((el) => {
    const button = document.createElement('button');
    button.innerHTML = el;
    sectionThree.appendChild(button);
  });

  const sectionFour = document.createElement('section');
  sectionFour.className = 'forth-row';
  keyboardContainer.appendChild(sectionFour);

  const forthRow = ['⇑Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '⇑'];
  forthRow.forEach((el) => {
    const button = document.createElement('button');
    button.innerHTML = el;
    sectionFour.appendChild(button);
  });

  const sectionFive = document.createElement('section');
  sectionFive.className = 'fifth-row';
  keyboardContainer.appendChild(sectionFive);

  const fifthRow = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];
  fifthRow.forEach((el) => {
    const button = document.createElement('button');
    button.innerHTML = el;
    sectionFive.appendChild(button);
  });

  /* add information below keyboard */
  const layoutInfo = document.createElement('div');
  layoutInfo.className = 'layoutInfo';
  keyboardContainer.appendChild(layoutInfo);
  layoutInfo.innerHTML = 'Смена раскладки виртуальной клавиатуры производится нажатием клавиш AltLeft + ShiftLeft.';

  /* styling large buttons */
  sectionOne.lastChild.id = 'backspace';
  sectionTwo.firstChild.id = 'tab';
  sectionThree.firstChild.id = 'capslock';
  sectionThree.lastChild.id = 'enter';
  sectionFour.firstChild.id = 'left-shift';
  sectionFive.firstChild.id = 'left-ctrl';
  sectionFive.childNodes[2].id = 'left-alt';
  sectionFive.childNodes[3].id = 'spacebar';
  sectionFive.childNodes[6].id = 'right-ctrl';

  /* animation button pressing */

  const firstRowCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  const secondRowCode = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  const thirdRowCode = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  const forthRowCode = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
  const fifthRowCode = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];


  document.addEventListener('keydown', (event) => {
    if (firstRowCode.includes(event.code)) {
      const pushed = firstRowCode.indexOf(event.code);
      sectionOne.childNodes[pushed].classList.add('active');
    }
    if (secondRowCode.includes(event.code)) {
      const pushed = secondRowCode.indexOf(event.code);
      sectionTwo.childNodes[pushed].classList.add('active');
    }
    if (thirdRowCode.includes(event.code)) {
      const pushed = thirdRowCode.indexOf(event.code);
      sectionThree.childNodes[pushed].classList.add('active');
    }
    if (forthRowCode.includes(event.code)) {
      const pushed = forthRowCode.indexOf(event.code);
      sectionFour.childNodes[pushed].classList.add('active');
    }
    if (fifthRowCode.includes(event.code)) {
      const pushed = fifthRowCode.indexOf(event.code);
      sectionFive.childNodes[pushed].classList.add('active');
    }
  });

  document.addEventListener('keyup', (event) => {
    if (firstRowCode.includes(event.code)) {
      const pushed = firstRowCode.indexOf(event.code);
      sectionOne.childNodes[pushed].classList.remove('active');
    }
    if (secondRowCode.includes(event.code)) {
      const pushed = secondRowCode.indexOf(event.code);
      sectionTwo.childNodes[pushed].classList.remove('active');
    }
    if (thirdRowCode.includes(event.code)) {
      const pushed = thirdRowCode.indexOf(event.code);
      sectionThree.childNodes[pushed].classList.remove('active');
    }
    if (forthRowCode.includes(event.code)) {
      const pushed = forthRowCode.indexOf(event.code);
      sectionFour.childNodes[pushed].classList.remove('active');
    }
    if (fifthRowCode.includes(event.code)) {
      const pushed = fifthRowCode.indexOf(event.code);
      sectionFive.childNodes[pushed].classList.remove('active');
    }
  });


  const lowerCase = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', '⇑Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];
  const shift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab⇄', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', '⇑Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];
  const capslock = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', '⇑Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '🠦'];
  const russianLowerCase = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', '⇑Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];
  const russianShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '-', '+', 'Backspace', 'Tab⇄', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', '⇑Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];
  const russianCapsLock = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab⇄', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', '⇑Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', '⇑', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Win', 'Ctrl', '←', '↓', '→'];


  const buttons = document.querySelectorAll('button');
  window.onload = function layoutLoad() {
    document.getElementById('user-search').focus(); /* set focus when page load */
    const layoutStatus = JSON.parse(window.localStorage.getItem('layout'));
    if (layoutStatus[15] === null || layoutStatus[15] === 'q') {
      buttons.forEach((button, index) => {
        button.innerHTML = lowerCase[index];
      });
    }
    if (JSON.parse(window.localStorage.getItem('layout'))[15] === 'й') {
      buttons.forEach((button, index) => {
        button.innerHTML = russianLowerCase[index];
      });
    }
  };


  buttons.forEach((button) => {
    /* mouse click input */
    button.addEventListener('click', () => {
      function getPosition(el) {
        return el.value.slice(0, el.selectionStart).length;
      }
      const position = getPosition(document.getElementById('user-search')); // get caret position;


      function setCaretPosition(inputValue, pos) { // set caret position
        if (inputValue.setSelectionRange) {
          inputValue.focus();
          inputValue.setSelectionRange(pos, pos);
        }
      }

      const caption = input.value;
      const start = inputWindow.selectionStart;
      const end = inputWindow.selectionEnd;

      if (button.innerHTML === 'Backspace') {
        if (inputWindow.selectionEnd === position) {
          input.value = caption.slice(0, position - 1) + caption.slice(position, caption.length);
          setCaretPosition(input, position - 1);
        } else {
          input.value = caption.slice(0, start) + caption.slice(end, caption.length);
          setCaretPosition(input, position);
        }
      } else if (button.innerHTML === 'Del') {
        if (end === position) {
          input.value = caption.slice(0, position) + caption.slice(position + 1, caption.length);
        } else {
          input.value = caption.slice(0, start) + caption.slice(end, caption.length);
        }
        setCaretPosition(input, position);
      } else if (button.innerHTML === 'Enter') {
        if (end === position) {
          input.value = `${caption.slice(0, position)}\n${caption.slice(position, caption.length)}`;
          setCaretPosition(input, position + 1);
        } else {
          input.value = `${caption.slice(0, start)}\n${caption.slice(end, caption.length)}`;
          setCaretPosition(input, position);
        }
        modal.style.display = 'none';
      } else if (button.innerHTML === ' ') {
        if (end === position) {
          input.value = `${caption.slice(0, position)} ${caption.slice(position, caption.length)}`;
        } else {
          input.value = `${caption.slice(0, start)} ${caption.slice(end, caption.length)}`;
        }
        setCaretPosition(input, position + 1);
      } else if (button.innerHTML === 'Alt' || button.innerHTML === 'Ctrl' || button.innerHTML === 'Win') {
        input.value = `${caption.slice(0, position)}${caption.slice(position, caption.length)}`;
      } else if (button.innerHTML === '⇑Shift' || button.innerHTML === '⇑') {
        if (buttons[0].innerHTML === '`') {
          buttons.forEach((item, index) => {
            item.innerHTML = shift[index];
          });
        } else {
          buttons.forEach((item, index) => {
            item.innerHTML = lowerCase[index];
          });
        }
      } else if (button.innerHTML === 'CapsLock') {
        if (buttons[15].innerHTML === 'q') {
          buttons.forEach((item, index) => {
            item.innerHTML = capslock[index];
          });
        } else if (buttons[15].innerHTML === 'Q') {
          buttons.forEach((item, index) => {
            item.innerHTML = lowerCase[index];
          });
        } else if (buttons[15].innerHTML === 'й') {
          buttons.forEach((item, index) => {
            item.innerHTML = russianCapsLock[index];
          });
        } else if (buttons[15].innerHTML === 'Й') {
          buttons.forEach((item, index) => {
            item.innerHTML = russianLowerCase[index];
          });
        }
      } else if (button.innerHTML === 'Tab⇄') {
        if (end === position) {
          input.value = `${caption.slice(0, position)}   ${caption.slice(position + 1, caption.length)}`;
          setCaretPosition(input, position + 3);
        } else {
          input.value = `${caption.slice(0, start)}  ${caption.slice(end, caption.length)}`;
          setCaretPosition(input, position + 2);
        }
      } else if (button.innerHTML === '&lt;') {
        if (end === position) {
          input.value = `${caption.slice(0, position)}<${caption.slice(position, caption.length)}`;
        } else {
          input.value = `${caption.slice(0, start)}<${caption.slice(end, caption.length)}`;
        }
        setCaretPosition(input, position + 1);
      } else if (button.innerHTML === '&gt;') {
        if (end === position) {
          input.value = `${caption.slice(0, position)}>${caption.slice(position, caption.length)}`;
        } else {
          input.value = `${caption.slice(0, start)}>${caption.slice(end, caption.length)}`;
        }
        setCaretPosition(input, position + 1);
      } else if (button.innerHTML === '&amp;') {
        if (end === position) {
          input.value = `${caption.slice(0, position)}&${caption.slice(position, caption.length)}`;
        } else {
          input.value = `${caption.slice(0, start)}&${caption.slice(end, caption.length)}`;
        }
        setCaretPosition(input, position + 1);
      } else if (end === position) {
        const b = button.innerHTML;
        input.value = caption.slice(0, position) + b + caption.slice(position, caption.length);
        setCaretPosition(input, position + 1);
      } else {
        const b = button.innerHTML;
        input.value = caption.slice(0, start) + b + caption.slice(end, caption.length);
        setCaretPosition(input, position + 1);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.altKey && event.shiftKey) {
      if (buttons[0].innerHTML === '`') {
        buttons.forEach((item, index) => {
          item.innerHTML = russianLowerCase[index];
        });
        window.localStorage.setItem('layout', JSON.stringify(russianLowerCase));
      } else {
        buttons.forEach((item, index) => {
          item.innerHTML = lowerCase[index];
        });
        window.localStorage.setItem('layout', JSON.stringify(lowerCase));
      }
    }

    function getPosition(el) {
      return el.value.slice(0, el.selectionStart).length;
    }
    const position = getPosition(document.getElementById('user-search')); // get caret position;


    function setCaretPosition(inputValue, pos) { // set caret position
      if (inputValue.setSelectionRange) {
        inputValue.focus();
        inputValue.setSelectionRange(pos, pos);
      }
    }

    const caption = input.value;
    const start = inputWindow.selectionStart;
    const end = inputWindow.selectionEnd;

    if (event.code === 'Tab') {
      if (end === position) {
        input.value = `${caption.slice(0, position)}   ${caption.slice(position, caption.length)}`;
      } else {
        input.value = `${caption.slice(0, start)}   ${caption.slice(end, caption.length)}`;
      }
      setCaretPosition(input, position + 3);
    }
    if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'Tab') {
      event.preventDefault();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey === false && buttons[15].innerHTML === 'q') {
      buttons.forEach((item, index) => {
        item.innerHTML = shift[index];
      });
    }
  });

  document.addEventListener('keyup', () => {
    if (buttons[15].innerHTML === 'Q') {
      buttons.forEach((item, index) => {
        item.innerHTML = lowerCase[index];
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey === false && buttons[15].innerHTML === 'й') {
      buttons.forEach((item, index) => {
        item.innerHTML = russianShift[index];
      });
    }
  });

  document.addEventListener('keyup', () => {
    if (buttons[15].innerHTML === 'Й') {
      buttons.forEach((item, index) => {
        item.innerHTML = russianLowerCase[index];
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock' && buttons[15].innerHTML === 'q') {
      buttons.forEach((item, index) => {
        item.innerHTML = capslock[index];
      });
    }
  });

  document.addEventListener('keyup', () => {
    if (buttons[15].innerHTML === 'Q') {
      buttons.forEach((item, index) => {
        item.innerHTML = lowerCase[index];
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock' && buttons[15].innerHTML === 'й') {
      buttons.forEach((item, index) => {
        item.innerHTML = russianCapsLock[index];
      });
    }
  });

  document.addEventListener('keyup', () => {
    if (buttons[15].innerHTML === 'Й') {
      buttons.forEach((item, index) => {
        item.innerHTML = russianLowerCase[index];
      });
    }
  });
}
export default generateKeyboard;
