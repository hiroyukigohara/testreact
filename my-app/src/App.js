import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MyTextBox = (props) => {
  const helper = (value) => {
    setValue(value);
    props.setUserInput(value);
  }
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => helper(e.target.value)}
      />
    </div>

  );
}

const GetDataFromAPI = () => {
  const data = fetch('https://newapi.com');
  return data;
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
      <MyTextBox setUserInput={setUserInput}/>
      <ShowUserInput userInput={userInput} />
    </div>
  );
}

export default App;
