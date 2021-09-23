const myRemoveWithoutCopy = require('./myRemoveWithoutCopy')

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })

  test('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 4)).not.toEqual([1, 2, 3, 4])
  })

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })


})