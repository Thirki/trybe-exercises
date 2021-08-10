// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo ,
// ou false , se não for.
console.log('---Exercício 1---')

function verificaPalindromo(str) {
  var separaLetras = str.split('');

  var inverterLetras = separaLetras.reverse();

  var juntarString = inverterLetras.join(""); 

  if (juntarString === str) {
    return true //é um Palíndromo
  }else {
    return false //não é um Palíndromo
  }
}

var eUmPalindromo = verificaPalindromo('arara')
console.log(eUmPalindromo)

console.log('')

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do 
// maior valor.
console.log('---Exercício 2---')

function maiorDosInteiros(ints) {
  let maiorAtual;
  for ( let i = 0; i < ints.length; i += 1){
    if (maiorAtual > ints[i]) {
      maiorAtual = maiorAtual;
    } else {
      maiorAtual = ints[i];
    }
  }
  return maiorAtual;
}
console.log(maiorDosInteiros([-1,-2,-3,-4,-5,-6,-7, 500]));

console.log('')

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
console.log('---Exercício 3---')
function menorDosInteiros(ints) {
  let menorAtual;
  for ( let i = 0; i < ints.length; i += 1){
    if (menorAtual < ints[i]) {
      menorAtual = menorAtual;
    } else {
      menorAtual = ints[i];
    }
  }
  return menorAtual;
}
console.log(menorDosInteiros([0, 1 , 2, 3, 4, -1]));

console.log('')

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
console.log('---Exercício 4---')

function verificarMaiorNome(nomes) {
  let maiorNome = "";

  for ( let i = 0; i < nomes.length; i += 1){
    if(nomes[i].length > maiorNome.length) {
      maiorNome = nomes[i];
    } else {
      maiorNome = maiorNome; 
    }
  }

  return maiorNome;
}

console.log(verificarMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log('')

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
console.log('---Exercício 5---')

let numFinal = 0;
let numVezesFinal = 0;

function quantasVezesSeRepete(num, arrNum) {
  let numVezesProv = 0;
  for(let i = 0; i < arrNum.length; i += 1) {
    if ( num === arrNum[i]) {
      numVezesProv += 1;
    }
  }
  if (numVezesProv > numFinal) {
    numFinal = num;
    numVezesFinal = numVezesProv;
  }
}

function separaNumeros(arrNum){
  for(let i = 0; i < arrNum.length; i += 1) {
    quantasVezesSeRepete(arrNum[i],arrNum);
  }

  return numFinal;
}

console.log(`o numero ${separaNumeros([2, 3, 2, 3, 3, 2, 3])} foi oque mais se repetiu, um total de ${numVezesFinal} vezes`)

console.log('')

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N
console.log('---Exercício 6---')

let numeros = [];

function juntaNumeros(num) {
  for (let i = 0; num > 0; i += 1) {
    numeros.push(num)
    num = num - 1;
  }
  return numeros;
}

function somaArray(arrNumeros) {
  let somaArray= 0;
  for (let i = 0; i < arrNumeros.length; i += 1) {
    somaArray = somaArray + arrNumeros[i];
  }
  return somaArray;
}

console.log(somaArray(juntaNumeros(5)));

console.log('')


//Crie uma função que receba uma string word e outra string ending . Verifique 
//se a string ending é o final da string word . Considere que a string ending
//sempre será menor que a string word .
console.log('---Exercício 7---')

function verificaPalavras(word, ending) {
  let ii = word.length - ending.length;
  let éIgual;

  for (let i = 0; i < ending.length; i += 1) {
    if ( word[ii+i] === ending[i]) {
      éIgual = true;
    } else {
      éIgual = false;
      break
    }
  }
  return éIgual;
}

console.log(verificaPalavras('aaaaaaaaaaaaaaaaaaaaaaaaaaaaatrybe', 'be'));

