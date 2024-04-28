import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MyTextBox = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>

  );
}

const ShowUserInput = (props) => {
  return (
    <div>
      <p>Input is : {props.userInput}</p>
    </div>
  );
}

function App() {
  const [userInput, setUserInput] = useState('Hello');
  return (
    <div>
      <MyTextBox />
      <ShowUserInput userInput={userInput} />
    </div>
  );
}

export default App;
