import {
  slider,
} from './constants.js';

function isCyrillic(str) {
  return /[а-яё]/i.test(str);
}

function clearData() {
  slider.textContent = '';
}

export {
  isCyrillic,
  clearData,
};
