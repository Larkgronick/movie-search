import {
  body,
  header,
  form,
  input,
  loader,
  keyboardImage,
  send,
  error,
  article,
  controls,
  prev,
  next,
  slider,
  footer,
  rsInfo,
  figure,
  githubImg,
  figcaption,
  githubLink,
  modal,
  modalContent,
  close,
  keyboardContainer,
} from './constants.js';

function generatePageElements(parent, element) {
  parent.appendChild(element);
}

function setInnerHTML(element, text) {
  element.innerHTML = text;
}

function setAttribute(element, attribute, name) {
  element.setAttribute(attribute, name);
}

function editHeader() {
  header.innerHTML = 'Movie Search';
}

function setPlaceholder() {
  input.placeholder = 'Search movie';
}

function inputFocus() {
  input.focus();
}

function init() {
  generatePageElements(body, header);
  generatePageElements(body, form);
  generatePageElements(form, input);
  generatePageElements(form, keyboardImage);
  generatePageElements(form, send);
  generatePageElements(body, error);
  generatePageElements(body, article);
  generatePageElements(article, loader);
  generatePageElements(article, slider);
  generatePageElements(article, controls);
  generatePageElements(controls, prev);
  generatePageElements(controls, next);
  generatePageElements(body, modal);
  generatePageElements(modal, modalContent);
  generatePageElements(modalContent, close);
  generatePageElements(modalContent, keyboardContainer);
  generatePageElements(body, footer);
  generatePageElements(footer, rsInfo);
  generatePageElements(footer, figure);
  generatePageElements(figure, githubImg);
  generatePageElements(figure, figcaption);
  generatePageElements(figcaption, githubLink);


  setInnerHTML(header, 'Movie Search');
  setInnerHTML(send, 'Search');
  setInnerHTML(prev, '&#8249;');
  setInnerHTML(next, '&#8250;');
  setInnerHTML(rsInfo, 'RS School 2020q1');
  setInnerHTML(githubLink, 'Larkgronick');
  setInnerHTML(close, '&times;');

  setAttribute(input, 'type', 'search');
  setAttribute(input, 'id', 'user-search');
  setAttribute(loader, 'class', 'lds-dual-ring');
  setAttribute(keyboardImage, 'id', 'keyboard');
  setAttribute(keyboardImage, 'src', 'assets/keyboard.png');
  setAttribute(form, 'autocomplete', 'off');
  setAttribute(send, 'id', 'search-button');
  setAttribute(send, 'type', 'submit');
  setAttribute(send, 'value', 'Search');
  setAttribute(error, 'id', 'error');
  setAttribute(article, 'id', 'slider-container');
  setAttribute(slider, 'id', 'slider');
  setAttribute(controls, 'class', 'controls');
  setAttribute(prev, 'class', 'prev');
  setAttribute(next, 'class', 'next');
  setAttribute(githubImg, 'src', '../assets/github.png');
  setAttribute(githubLink, 'href', 'https://github.com/Larkgronick');
  setAttribute(modal, 'id', 'modal');
  setAttribute(modal, 'class', 'modal');
  setAttribute(modalContent, 'class', 'modal-content');
  setAttribute(close, 'id', 'close');
  setAttribute(keyboardContainer, 'id', 'keyboard-container');

  editHeader();
  setPlaceholder();
  window.onload = inputFocus();
  form.addEventListener('submit', (event) => { event.preventDefault(); }, true);
}

export default init;
