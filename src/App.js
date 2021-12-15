import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState({ num: 0, fred: "barney", myarr: [11, 22, 33] });

  return (
    <div className='App'>
      <header className='App-header'>
        {JSON.stringify(count)}
        <button
          onClick={() => {
            setCount((curr) => {
              let newObj = {...curr}
              newObj.num += 1;
              return newObj;
            });
            console.log(`CLICKED! ${count.num}`);
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
