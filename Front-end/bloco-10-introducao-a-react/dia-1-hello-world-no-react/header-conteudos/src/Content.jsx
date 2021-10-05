import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        <h1>Conteúdos de Front-End</h1>
        {conteudos.map((content) => {
          return(
            <div key={content.bloco} className="card-content">
              <p>O conteúdo é: <span>{content.conteudo}</span></p>
              <p>Status: <span>{content.status}</span></p>
              <p>Bloco: <span>{content.bloco}</span></p>
            </div>
          )
        })}
      </>
    )
  }
}
export default Content;