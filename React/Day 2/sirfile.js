// App.js

import {useState} from 'react'
import FormContext from './FormContext';
import Login from './components/Login';
import Home from './components/Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({
    userName: "",
    email: "",
    password: ""
  })
  return <FormContext.Provider value={{
    loginData,
    setLoginData
  }}>
    {
      !isLoggedIn ? <Login /> : <Home />
    }
  </FormContext.Provider>
}

export default App;

// Login.js

import {useContext} from 'react'
import FormContext from '../FormContext'
import "../styles/Login.css"

function Login() {
    const {loginData, setLoginData} = useContext(FormContext)
    const {userName, email, password} = loginData
    
    function onSubmit() {
    }

    function onUserNameChange(event) {
        updateStateOnInputChange(event.target.value, "userName")
    }

    function onEmailChange(event) {
        updateStateOnInputChange(event.target.value, "email")
    }

    function onPasswordChange(event) {
        updateStateOnInputChange(event.target.value, "password")
    }

    function updateStateOnInputChange(value, type) {
        switch(type) {
            case "userName":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    userName: value
                }))
            return
            case "email":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    email: value
                }))
            return
            case "password":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    password: value
                }))
            return
        }
    }

    return <form className="loginContainer">
        <input placeholder="Enter Username" value={userName} className="loginField" onChange={onUserNameChange} required/>
        <input placeholder="Enter Email" value={email} type="email" className="loginField" required onChange={onEmailChange}/>
        <input placeholder="Enter password" value={password} type="password" className="loginField" required onChange={onPasswordChange}/>
        <button onSubmit={onSubmit} className="loginButton">Login</button>
        </form>
}

export default Login