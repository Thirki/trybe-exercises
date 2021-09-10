const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, actual) => {
    for (let i = 0; i < actual.length; i += 1) {
      actual[i] === 'A' || actual[i] === 'a' ? acc += 1 : acc;
    }
    return acc;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);