import React, { useState } from 'react';
import {data} from './data';
import List from './List';
function App() {
  const [ people, setPeople ] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{ people.length } aniversários hoje</h3>
        <List people={people} />
        <div className='buttons'>

        <button onClick={() => setPeople(data)}>Recarregar</button>
        <button onClick={() => setPeople([])}>Limpar tudo</button>
        </div>
      </section>
    </main>
  )
}

export default App;
