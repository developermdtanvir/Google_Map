import { createContext, useState } from 'react';
import './App.css';
import Derection from './components/Derection';
export const userContext = createContext()
function App() {
  const [user, setUser] = useState([])
  return (
    <div>
      <Derection />
    </div>
  );
}

export default App;
