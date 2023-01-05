import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import UserDetails from './components/UserDetails/UserDetails';
export   const userContext =  createContext()
function App() {
  const [user,setUser] = useState([])
  return (
     <userContext.Provider value={[user,setUser]}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/user/:id' element={<UserDetails />} />
        </Routes>
      </Router>
     </userContext.Provider>
  );
}

export default App;
