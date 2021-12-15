import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        {count}
        <button
          onClick={() => {
            setTimeout(() => {
              console.log(`setCount()!! ${Date()}`);
              setCount((x) => x + 1);
            }, 3000);
            console.log(`CLICKED! ${count}`);
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
