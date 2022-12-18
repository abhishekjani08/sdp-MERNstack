
import '../styles/Login.css'
import {useNavigate} from "react-router-dom";




function Login(props) {

    const navigate =useNavigate()
    const jwtToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    function onClick(){
        localStorage.setItem("localAuthToken", jwtToken)
        navigate("/")
    }
    return<div className='LoginContainer'>
        <button onClick={onClick}>Login</button>
    </div>
}
export default Login
