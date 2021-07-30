let a = 2;
let b = 5;

// adição
let soma = a + b;
// Subtração
let sub = a - b;
// Multiplicação
let mult = a * b;
// Divisão
let divs = a / b;
// Módulo
let mod = a % b;

//retornar o maior de dois números
let listaDeDoisNúmeros = [1, 2]
let maiorDeDoisNúmeros = Math.max(...listaDeDoisNúmeros);
console.log(maiorDeDoisNúmeros)

//retornar o maior de tres números
let listaDeTresNúmeros = [1, 2, 3]
let maiorDeTresNúmeros = Math.max(...listaDeTresNúmeros);
console.log(maiorDeTresNúmeros)

// verificar se o numero é positivo ou negativo
var c = 12;
if (c > 0) {
    console.log('Numero positivo')
} else if (c < 0) {
    console.log('Numero Negativo')
} else {
    console.log('Numero Neutro')
}



// Analisar tres angulos de um triangulo, e descobrir  se e valido
let angulos = [120, 20, 30]

function angulosTriangulo(n1, n2, n3) {
    angulosDois = [n1, n2, n3];

    function validaTriangulo(item) {
        if (typeof item === "number" && item > 0) {
            console.log(`Variável ${item} valido!`)
            return;
        } else {
            console.log(`Variável "${item}" invalido, favor inserir um numero de angulo valido`)
            return;
        }
    }
    angulosDois.forEach(validaTriangulo)
    let somaAngulos = n1 + n2 + n3;

    if (somaAngulos === 180 && typeof somaAngulos === "number") {
        console.log("Triangulo valido")
    } else if (somaAngulos < 180 & typeof somaAngulos === "number") {
        console.log("Soma de Angulo menor que 180 graus")
    } else {
        console.log("Triangulo invalido, favor corrigir a dica anterior")
    }
}
angulosTriangulo(...angulos)

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

function converteNota(notaNumero){
    if (notaNumero >= 90 && typeof notaNumero === "number") {
        return notaNumero = "A";
    } else if (notaNumero >= 80 && typeof notaNumero === "number"){
        return notaNumero = "B";
    }else if (notaNumero >= 70 && typeof notaNumero === "number"){
        return notaNumero = "C";
    }else if (notaNumero >= 60 && typeof notaNumero === "number"){
        return notaNumero = "D";
    }else if (notaNumero >= 50 && typeof notaNumero === "number"){
        return notaNumero = "E";
    }else if (notaNumero < 50 && typeof notaNumero === "number"){
        return notaNumero = "F";
    } else {
        console.log(`Favor inserir um carácter valido, ${notaNumero} é um valor aceito`)
        return;
    }
}

var nota = converteNota(90);
console.log(nota)

// Escreva um programa que defina três números em constantes e retorne true se 
//pelo menos uma das três for par. Caso contrário, ele retorna false .

function verificaPar(n1, n2, n3) {
    let numeroPar = [n1, n2, n2];
    if ((numeroPar[0] % 2 === 0 || numeroPar[1] % 2 === 0 || numeroPar[2] % 2 === 0)) {
        return true
    } else {
        return false
    }
}

let temUmPar = verificaPar(2, 2, 2)
console.log(temUmPar)

// Escreva um programa que defina três números em constantes e retorne true se pelo
// menos uma das três for ímpar. Caso contrário, ele retorna false .
function verificaImpar(n1, n2, n3) {
    let numeroImpar = [n1, n2, n2];
    if ((numeroImpar[0] % 2 === 1 || numeroImpar[1] % 2 === 1 || numeroImpar[2] % 2 === 1)) {
        return true
    } else {
        return false
    }
}

let temUmImpar = verificaImpar(2, 2, 2)
console.log(temUmImpar)

// Escreva um programa que se inicie com dois valores em duas constantes 
// diferentes: o custo de um produto e seu valor de venda. A partir dos valores, 
// calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa
//  terá ao vender mil desses produtos.

let custoProduto = 20;
let porcentagemImposto = 20;
custoTotal = custoProduto + ((custoProduto/100)*porcentagemImposto); //imposto de 20%
console.log(custoTotal)
let valorVenda = 30;

console.log(`o lucro ao vender mil produto, sera de ${1000 * (valorVenda - custoTotal)}`)

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu 
// salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
// calcule o líquido a ser recebido.


function calculaLiquido(salario) {
    if (salario <= 1556.94) {
        var alicotaInss = (salario/100)*8;
    } else if (salario <= 2594.92){
        var alicotaInss = (salario/100)*9;
    } else if (salario <= 5189.82){
        var alicotaInss = (salario/100)*11;
    } else {
        var alicotaInss = 570.88;
    }

    console.log(alicotaInss)
    var salarioBase = salario - alicotaInss;
    console.log(salarioBase)

    if (salarioBase <= 1903.98) {
        var alicotaIr = 0;
        parcelaIr = 0;
    } else if (salarioBase <= 2826.65) {
        var alicotaIr = 7.5;
        parcelaIr = 142.80
    } else if (salarioBase <= 3751.05) {
        var alicotaIr = 15;
        parcelaIr = 354.80;
    } else if (salarioBase <= 3751.05) {
        var alicotaIr = 22.5;
        parcelaIr = 636.13;
    } else {
        var alicotaIr = 27.5;
        parcelaIr = 869.36;
    }

    console.log(alicotaIr)
    console.log(parcelaIr)

    var valorIr = (salarioBase/100*(alicotaIr)) - parcelaIr
    return salarioBase - (valorIr.toFixed(2))
    
}

console.log(calculaLiquido(3000))