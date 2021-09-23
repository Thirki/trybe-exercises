function hydrate(str) {
  const arrNumeros = str.split("").filter(n => (Number(n) || n == 0)).join("");
  const copos = arrNumeros.split('').reduce((acc, actual) => {
    return acc + Number(actual);
  }, 0)

  return copos > 1 ? `${copos} copos de água` : `${copos} copo de água`
}

module.exports = hydrate;