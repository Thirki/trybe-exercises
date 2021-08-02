let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores 
// nele contidos com a função console.log() ;
console.log('exercicio 1')

for (i = 0; i <= (numbers.length - 1); i++) {
  console.log(numbers[i])
}
console.log('')

// Para o segundo exercício, some todos os valores contidos no array e imprima 
// o resultado;
console.log('exercicio 2')
let somaArray = 0;
for (i = 0; i <= (numbers.length - 1); i++) {
  somaArray += numbers[i];
}

console.log(somaArray)
console.log('')


// Para o terceiro exercício, calcule e imprima a média aritmética
// dos valores contidos no array;
console.log('exercicio 3')
var mediaArray = (somaArray/numbers.length)
console.log(mediaArray)
console.log('')

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
//  imprima a mensagem: "valor maior que 20". Caso não seja,
//   imprima a mensagem: "valor menor ou igual a 20";
console.log('exercicio 4')
if (mediaArray > 20) {
  console.log("valor maior que 20")
} else {
  console.log("valor menor ou igual a 20")
}
console.log('')

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
console.log('exercicio 5')
let maiorNumero;
for (i = 0; i <= (numbers.length - 1); i++) {
  if (maiorNumero > numbers[i]){
    maiorNumero = maiorNumero;
  } else {
    maiorNumero = numbers[i]
  }
}

console.log(maiorNumero)

console.log('')

// Descubra quantos valores ímpares existem no array e imprima o resultado.
//  Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

console.log('exercicio 6')
arrayImpar= [];
for (i = 0; i <= (numbers.length - 1); i++) {
  if ( numbers[i] % 2 === 1) {
    arrayImpar.push(numbers[i])
  } else {

  }
}

if (arrayImpar.length === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
    console.log(`foram encontrados ${arrayImpar.length} números impares, que são ${arrayImpar}`)
}

console.log('')

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

console.log('exercicio 7')
let menorNumero;
for (i = 0; i <= (numbers.length - 1); i++) {
  if (menorNumero < numbers[i]){
    menorNumero = menorNumero;
  } else {
    menorNumero = numbers[i]
  }
}

console.log(menorNumero)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

console.log('exercicio 7')

let criaArray= [];
let metaArray = 25;

for (i=1; i <= metaArray; i++) {
  criaArray.push(i)
}
console.log(criaArray)

console.log('')

// Utilizando o array criado no exercício anterior imprima o resultado da divisão 
// de cada um dos elementos por 2 .

console.log('exercicio 8')

for (i=0; i <= (criaArray.length - 1); i++) {
  console.log(`${criaArray[i]} ÷ 2 = ${criaArray[i] / 2}`)
}

console.log('')
