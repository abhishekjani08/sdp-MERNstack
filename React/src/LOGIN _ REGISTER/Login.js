import { useContext } from 'react';
import FormContext from '../FormContext';
import '../styles/Login.css'
function Login() {

    const { loggedInData, setLoggedInData , setIsLoggedIn} = useContext(FormContext)
    const { userName, email, password } = loggedInData
   

    function onSubmit(event) {
        event.preventDefault()
        setIsLoggedIn(true)
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
                setLoggedInData((prevLoggedInData) => ({
                    ...prevLoggedInData,
                    userName: value
                }))
            return
            case "email":
                setLoggedInData((prevLoggedInData) => ({
                    ...prevLoggedInData,
                    email: value
                }))
            return
            case "password":
                setLoggedInData((prevLoggedInData) => ({
                    ...prevLoggedInData,
                    password: value
                }))
            return
        }
}

return <form className="LoginContainer" onSubmit={onSubmit}>
    <input placeholder='Enter Username' value={userName} type={userName} className="LoginField" onChange={onUserNameChange} required />
    <input placeholder='Enter Email' value={email} type={email} className="LoginField" onChange={onEmailChange} required />
    <input placeholder='Enter Password' value={password} type={password} className="LoginField" onChange={onPasswordChange} required />
    <button type="submit" className="LoginButton">Login test</button>
</form>
}
export default Login
