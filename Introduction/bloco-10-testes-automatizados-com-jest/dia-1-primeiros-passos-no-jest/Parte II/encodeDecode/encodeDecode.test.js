const encodeDecode = require('./encodeDecode')

const { encode, decode } = encodeDecode;

describe('Para as funções encode e decode crie os seguintes testes:', () => {
  describe('Teste se encode e decode são funções;', () => {
    test('Testando o tipo de encode', () => {
      expect(typeof encode).toBe('function');
    })
    test('Testando o tipo de encode', () => {
      expect(typeof decode).toBe('function');
    })
  })

  test('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })

  test('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })

  describe('Teste se as demais letras/números não são convertidos para cada caso;;', () => {
    const demaisLetras = 'bcdfghjklmnpqrstvxywz';
    const demaisNumeros = '06789';
    test('Testando o tipo de letras', () => {
      expect(encode(demaisLetras)).toBe(demaisLetras);
    })
    test('Testando o tipo de encode', () => {
      expect(decode(demaisNumeros)).toBe(demaisNumeros);
    })
  })
})