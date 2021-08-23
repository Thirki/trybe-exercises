const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

const allLi = document.querySelector('.container').children;

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTech(li){
  const currentTech = document.getElementsByClassName('tech');
  for (let i = 0; i < currentTech.length; i += 1){
    if (currentTech[i] !== li.target) {
      currentTech[i].classList.remove('tech');
    }
  }
  li.target.classList.toggle('tech');
}

for (let i = 0; i < allLi.length; i += 1){
  allLi[i].addEventListener('click', (event) => {
    addTech(event);
    input.value = '';
  });
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeValue (inputEvent){
  const techClass = document.querySelector('.tech');
  if (techClass !== null) {
    techClass.innerText = inputEvent.target.value;
  }
}

input.addEventListener('keyup', (event) => {
  changeValue(event);
});

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
myWebpage.addEventListener('dblclick', () => {
  window.open('http://www.devmedia.com.br', '_blank');
})
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function oneColor() {
  const oneColor = Math.floor(Math.random() * 255);
  return oneColor;
}

function generateRgb(){
  const rgb = [];
  rgb.push(oneColor());
  rgb.push(oneColor());
  rgb.push(oneColor());
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

myWebpage.addEventListener('mouseover', () => {
  const cor = generateRgb();
  myWebpage.style.color = cor;
})

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.