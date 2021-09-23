const compareObject = require('./compareObject')

const {obj1, obj2, obj3} = compareObject;

describe('Comparando obj1 aos demais', () => {
  test('obj1 em relação ao obj2', () => {
    expect(obj1).toEqual(obj2);
  })

  test('obj1 em relação ao obj2', () => {
    expect(obj1).not.toEqual(obj3);
  })
})

describe('Comparando obj2 aos demais', () => {
  test('obj2 em relação ao obj1', () => {
    expect(obj2).toEqual(obj1);
  })

  test('obj1 em relação ao obj2', () => {
    expect(obj2).not.toEqual(obj3);
  })
})

describe('Comparando obj3 aos demais', () => {
  test('obj3 em relação ao obj2', () => {
    expect(obj3).not.toEqual(obj1);
  })

  test('obj3 em relação ao obj2', () => {
    expect(obj3).not.toEqual(obj2);
  })
})