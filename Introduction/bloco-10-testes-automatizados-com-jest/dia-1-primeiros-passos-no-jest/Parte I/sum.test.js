const sum = require('./sum');

describe('Testar a função de soma', () => {
  it('somar 4 + 9', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('somar 0 + 0', () => {
    expect(0).toBe(sum(0, 0));
  });
  it('somar 4 + "5"', () => {
    expect(() => {sum(4,"5") }).toThrowError(new Error('parameters must be numbers'));
  });
})