import { useState } from 'react';
import './App.css';
import FormContext from './FormContext';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedInData, setLoggedInData] = useState({
    userName:"",
    email:"",
    password:""
  })

  return <><h1>Abhishek</h1>
    <FormContext.Provider value={{loggedInData,setLoggedInData,setIsLoggedIn}}>
      {!isLoggedIn ? <Login /> : <Home />}
    </FormContext.Provider>
  </>
}
export default App;