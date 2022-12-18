// import { useContext } from 'react';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import '../styles/Login.css'
function Home() {
    const isLoggedIn = localStorage.getItem("localAuthToken")
    const navigate= useNavigate();

    useEffect(()=>{
        if (!isLoggedIn) {
            navigate('/login')
    }},[] )
        return isLoggedIn ? <div className="HomeContainer">Home Page</div> : null
    }
    
export default Home
