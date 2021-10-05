const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Acordar', 'Arrumar a casa', 'Comer', 'Lavar a louça'];

function App() {
  return (
      <>
      <h1>Hello</h1>
      <ol>
        {array.map((item) => Task(item))}
      </ol>
      </>
  );
}


export default App;
