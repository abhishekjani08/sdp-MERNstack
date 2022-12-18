import React, { useState, useRef, useEffect } from 'react'
import UserInfo from './components/UserInfo'

const defaultEndpoint = "https://reqres.in/api/users?page=1"

export default function DataFetcher() {
    const [ users, setUsers ] = useState([])
    const pageRef = useRef(1)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetchUserData()
    }, [])

    function fetchUserData(){
        fetch(`${defaultEndpoint}${pageRef.current}`)
        .then((response) => {
            if(response.status == 200)
                return response.json()
        })
        .then((users) =>{
            const { data } = users 
            setTimeout(() => {
                setUsers((prevUsers) => [...prevUsers, ...data])
                setIsLoading(false)
            }, 3000);
        })
        .catch((error) => {
            console.log("Error: " , error)
        })
        console.log(users)
    }
    
    if(isLoading){
        return <div className='loader'>
            <h3>Is Loading</h3>
        </div>
    }
  return users.length ? users.map((user, index) => <UserInfo key={index} lastName={user["last_name"]} firstName={user["first_name"]} avatarUrl={user["avatar"]} />) : <div className='loader'> <h1>No Users Found </h1></div>
}
