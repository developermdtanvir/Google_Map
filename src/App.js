import { createContext, useState } from 'react';
import './App.css';
import Map from './components/Map';
export const userContext = createContext()
function App() {
  const [user, setUser] = useState([])
  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
