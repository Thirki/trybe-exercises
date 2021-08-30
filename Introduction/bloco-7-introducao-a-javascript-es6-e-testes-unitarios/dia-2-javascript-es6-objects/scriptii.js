const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve 
// possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que 
// deverá ser adicionada e o valor dela.

function adicionaTurno(objeto, chave, valor) {
  objeto[chave] = valor;
}

adicionaTurno(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um 
// objeto como parâmetro.
function listaKeys(objeto) {
  return Object.keys(objeto)
}
// console.log(listaKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto.
function tamanhoObjeto(objeto) {
  return Object.keys(objeto).length
}
// console.log(tamanhoObjeto(lesson2));

// Crie uma função para listar os valores de um objeto. 
// Essa função deve receber um objeto como parâmetro.
function showValue(obj) {
  return Object.values(obj)
}
// console.log(showValue(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do 
// Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: 
// lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a 
// saída deverá ser a seguinte:

function mergeLessons() {
  let allLessons = Object.assign({},{ lesson1, lesson2, lesson3 });
  return allLessons;
}

const allLessons = mergeLessons();
// console.log(allLessons)

function allStudents(obj) {
  let total = 0;
  const todosObjetos = Object.keys(obj);
  for (let i = 0; i < todosObjetos.length; i++) {
    let objetoAtual = todosObjetos[i];
    total += obj[todosObjetos[i]].numeroEstudantes;
  }
  return total;
}
// console.log(allStudents(allLessons))

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no 
// objeto. Por exemplo:

function getValueByNumber(obj, numero) {
  const array = Object.keys(obj);
  return obj[array[numero]];
}
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa 
// função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o 
// valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));