function encode(str) {
  let separaLetras = str.split('');
  let vogalCodificada = [];

  for (let i = 0; i < separaLetras.length; i++) {
    if (separaLetras[i] === 'a') {
      vogalCodificada.push(1);
    } else if (separaLetras[i] === 'e') {
      vogalCodificada.push(2);
    } else if (separaLetras[i] === 'i') {
      vogalCodificada.push(3);
    } else if (separaLetras[i] === 'o') {
      vogalCodificada.push(4);
    } else if (separaLetras[i] === 'u') {
      vogalCodificada.push(5);
    } else {
      vogalCodificada.push(separaLetras[i]);
    }
  }

  let vogalParaNumero = vogalCodificada.join('');
  return vogalParaNumero;
}
function decode(str) {
  let separaLetras = str.split('');
  let vogalCodificada = [];
  
  for (let i = 0; i < separaLetras.length; i++) {
    if (separaLetras[i] === '1') {
      vogalCodificada.push('a');
    } else if (separaLetras[i] === '2') {
      vogalCodificada.push('e');
    } else if (separaLetras[i] === '3') {
      vogalCodificada.push('i');
    } else if (separaLetras[i] === '4') {
      vogalCodificada.push('o');
    } else if (separaLetras[i] === '5') {
      vogalCodificada.push('u');
    } else {
      vogalCodificada.push(separaLetras[i]);
    }
  }

  let vogalParaNumero = vogalCodificada.join('');
  return vogalParaNumero;
}

module.exports = { encode, decode}