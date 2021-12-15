import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(); // start off empty

  return (
    <div className='App'>
      <header className='App-header'>
        {count ? count() : 'no value'}{' '}
        {/* if we have a value, call it as a function */}
        <button
          onClick={() => {
            setCount((curr) => {
              return () => {
                // returning a function!!!
                let msg = "i'm a function!";
                console.log(msg);
                return msg;
              };
            });
          }}
        >
          click me
        </button>
      </header>
    </div>
  );
}

export default App;
