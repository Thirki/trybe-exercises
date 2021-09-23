function techList(array, name) {
  if(array.length === 0) { return 'Vazio!'}
  return array.sort().map(tech => {
    return {tech: tech, name: name}
  })
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = techList;