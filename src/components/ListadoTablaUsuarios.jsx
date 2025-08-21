'use client'
import axios  from "axios";
async function loadUsuario(){
    const {data} = await axios.get('http://localhost:3000/api/users');
    return data ;
}

async function ListadoTablaUsuarios() {
    const usuarios = await loadUsuario();
    return(
    <div className=" flex justify-center items-center">
<div
  class="relative flex flex-col p-3 px-8 w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Cedula
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Nombre
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
            Fecha de Creacion
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"> Pago</p>
        </th>
      </tr>
    </thead>
    <tbody>
      {usuarios.map(user=>(
      <tr>
        
            <td>{user.Cedula}</td>
            <td>{user.Nombre}</td>
            <td>{user.FechaCreacion}</td>
            <td>{user.Cedula}</td>
       
      </tr>
       ))}
    </tbody>
  </table>
</div>
</div>
    )
}
export default ListadoTablaUsuarios