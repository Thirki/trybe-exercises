const fontExemple = document.getElementById('font-exemple');
const option = document.getElementById('fonts').children;
const select = document.getElementById('fonts');
const submitButton = document.getElementById('submit-button');
const saveStorage = document.getElementById('save-storage');
const body = document.body;

const colorList = document.getElementById('color-pallet').children;
const submitColor = document.getElementById('submit-color');

const spacingList = document.querySelector('.line-height').children;
const buttonChangeSpacing = document.getElementById('change-spacing');

const inputEnterTheWord = document.getElementById('enter-the-word');
const buttonChangeFontSize = document.getElementById('change-font-size');
const listOfText = document.querySelectorAll('#fonts-list div p');

function changePreviewFont () {
  const currentFont = select.value;
  fontExemple.style.fontFamily = currentFont;
}

function changeWebsiteFont() {
  const newFont = fontExemple.style.fontFamily;
  document.body.style.fontFamily = newFont;
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  changeWebsiteFont()
});

select.addEventListener("change", changePreviewFont);

function saveStyles() {
  const currentFont = document.body.style.fontFamily;
  localStorage.setItem('font', currentFont);
  const background = document.querySelector('.selected').style.backgroundColor;
  localStorage.setItem('bgColor', background);
  const spacing = document.querySelector('.line-height .selected').style.lineHeight;
  localStorage.setItem('lHeight', spacing);
  const fontSizing = document.querySelector('#fonts-list .selected').style.fontSize;
  localStorage.setItem('fntSize', fontSizing);
}

saveStorage.addEventListener('click', () => {
  saveStyles();
  document.location.reload();
});

function toggleSelected(color){
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].classList.remove('selected');
  }
  color.classList.add('selected');
}

for (let i = 0; i < colorList.length; i += 1){
  colorList[i].addEventListener('click', (event) => {
    toggleSelected(event.target);
  })
}

submitColor.addEventListener('click', (event) => {
  event.preventDefault();
  const actualColor = document.querySelector('.selected').style.backgroundColor;
  document.body.style.backgroundColor = actualColor;
})

function setSpacing(spacing, webDefault) {
  spacing.style.lineHeight = `${webDefault}rem`;
}

function addDefaultSpacing() {
  for (let i = 0; i < spacingList.length; i+= 1) {
    setSpacing(spacingList[i], i+1.5);
  }
}

function spacingEvents() {
  for (let i = 0; i < spacingList.length; i+= 1) {
    spacingList[i].addEventListener('click', (event) => {
      toggleSelectedSpacing(spacingList[i]);
    })
  }
}

function chooseSpacing(spacing) {
  const currentSpacing = document.querySelector('.line-height .selected');
  console.log(currentSpacing.style.lineHeight);
  body.style.lineHeight = currentSpacing.style.lineHeight;
}

function toggleSelectedSpacing(spacing){
  for (let i = 0; i < spacingList.length; i += 1) {
    spacingList[i].classList.remove('selected');
  }
  spacing.classList.add('selected');
}

function fontEvent() {
  for (let i = 0; i < listOfText.length; i+=1) {
    listOfText[i].style.fontSize = `${(i+1)/2}rem`
    listOfText[i].addEventListener('click', (event) => {
      addSelectedClass(event.target);
    })
  }
}

function addSelectedClass (word) {
  const actualSelected = document.querySelector('#fonts-list div .selected')
  if (actualSelected !== null) {
    actualSelected.classList.remove('selected')
  }
  word.classList.add('selected');
}

function changePValue(word) {
  for (let i = 0; i < listOfText.length; i += 1) {
    listOfText[i].innerText = word;
  }
}

inputEnterTheWord.addEventListener('keyup', (event) => {
  changePValue(inputEnterTheWord.value);
  if (inputEnterTheWord.value === "") {
    changePValue('Aaa')
  } else if (inputEnterTheWord.value[0] === " ") {
    changePValue('O texto não pode começar com espaço')
  }
});

buttonChangeFontSize.addEventListener('click', () => {
  const fontSizing = document.querySelector('#fonts-list .selected').style.fontSize;
  body.style.fontSize = fontSizing;
})

window.onload = () => {
  spacingEvents();
  addDefaultSpacing();
  toggleSelectedSpacing(spacingList[0]);
  buttonChangeSpacing.addEventListener('click', chooseSpacing)

  fontEvent();
  addSelectedClass(listOfText[0]);
  toggleSelected(colorList[0]);

  if (localStorage.length > 0) {
    body.style.fontFamily = localStorage.font;
    body.style.backgroundColor = localStorage.bgColor;
    body.style.lineHeight = localStorage.lHeight;
    body.style.fontSize = localStorage.fntSize;
  }
}