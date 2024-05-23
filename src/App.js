import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;
