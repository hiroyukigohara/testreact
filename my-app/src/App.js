import logo from './logo.svg';
import './App.css';

const MyTextBox = () => {
  return (
    <div>
    <input type="text" />
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
  return (
    <div>
      <MyTextBox />
      <ShowUserInput userInput="Hello" />
    </div>
  );
}

export default App;
