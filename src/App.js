import logo from './logo.svg';
import './App.css';
import A from './components/A';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [dataForProps,setDataForProps]=useState("Data from App Component")
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
