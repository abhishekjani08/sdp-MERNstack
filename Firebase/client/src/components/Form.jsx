import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';

function Form() {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const resp = await addDoc (collection(db, "tasks"),{
      name:name,
      desc:desc,
    });
    console.log(resp.id)
  }
  return (
    <form className='form-control py-3' >

      <input onChange={(e) => {setName(e.target.value)}} className='form-control' placeholder='Task Name' />
      <textarea onChange={(e) => {setDesc(e.target.value)}} className='form-control mt-3' placeholder='Description'></textarea>

      <button onClick={handleSubmit} className='btn btn-success px-5 py-2 mt-3'>Add</button>
    </form>
  )
}

export default Form
