// Faça as modificações necessárias na função para que o seu comportamento 
// respeite o escopo no qual cada variável foi declarada.
//   -Modifique a estrutura da função para que ela seja uma arrow function .
//   -Modifique as concatenações para template literals .

let testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em 
// ordem crescente.

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); 
// retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . 
// Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  return oddsAndEvens.sort((a, b) => a - b);
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Crie uma função que receba um número e retorne seu fatorial.

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.log(factorialize(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const maiorPalavra = frase => {
  let maior = "";
  frase.split(" ").forEach(word => {
    if (word.trim().length > maior.length) {
      maior = word.trim();
    }
  })
  return maior;
}

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável
//  clickCount é atualizada.
const button = document.getElementById('counter');
let clickCount = 0;

const counter = () => {
  clickCount++
  button.innerText = clickCount;
}

button.addEventListener('click', counter)

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. 
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar 
// e substituir pela string que você passou como parâmetro. Sua função deve retornar
//  essa nova string .
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));

