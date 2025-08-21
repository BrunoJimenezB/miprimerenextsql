'use client'
import  { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
function FormUsuario() {
     const router = useRouter();
 const [usuario, setUsuario] = useState({
        Cedula: "",
        Nombre: ""
       
    });
         const form = null;

     const handleChange = e=> {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    });
     };
     const handleSubmit = async (e)=> {
     e.preventDefault();
     const result = await axios.post('/api/users', usuario)
     router.push("/")
     };
  return (
       <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4' ref={form}>
   <label className='block text-gray-700 text-sm font-bold mb-2'>Cedula</label>

   <input name='Cedula' className='border shadow rounded w-full py-2 px-3 text-black' type="number" placeholder="Cedula" onChange={handleChange}/>
   <label className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
   
   <input name='Nombre' className='border shadow rounded w-full py-2 px-3 text-black' type="text" placeholder="Nombre" onChange={handleChange} />
   
   <button   className='bg-blue-400 rounded hover:bg-blue-900 px-4 font-bold py-2'>Guardar</button>
        </form>
  )
}

export default FormUsuario