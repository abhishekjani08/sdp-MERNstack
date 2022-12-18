import { useContext } from 'react';
import FormContext from '../FormContext';
import '../styles/Login.css'
function Home() {

    const { loggedInData, setLoggedInData } = useContext(FormContext)
    const { userName, email, password } = loggedInData

return <div className='HomeContainer'>
    <h4>Username - {userName}</h4>
    <h4>Email - {email}</h4>
    <h4>Password - {password}</h4>
</div>
}
export default Home
