// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n 
// qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado 
// de tamanho n .

let n = 5;

console.log("exercicio 1")

for(i = 1; i <= 5; i++) {
  console.log("*".repeat(n))
}

console.log()

// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo 
// retângulo com 5 asteriscos de base.

console.log("exercicio 2")

for(i = 1; i <= 5; i++) {
  console.log("*".repeat(i))
}

console.log()

//Agora inverta o lado do triângulo. Por exemplo:

console.log("exercicio 3")

for(i = 1; i <= 5; i++) {
  console.log(" ".repeat(n-i), "*".repeat(i))
}

console.log()

//Depois, faça uma pirâmide com n asteriscos de base:

console.log("exercicio 4")

for(i = 1; i <= 5; i++) {
  if (i % 2 === 1) {
    console.log(" ".repeat((n-i)/2),"*".repeat(i), " ".repeat((n-i)/2))
  } else {

  }
}
