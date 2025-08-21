'use client'
import DataTable from 'react-data-table-component';
import axios  from "axios";
async function loadUsuario(){
    const res = await fetch("http://localhost:3000/api/users"); 
  if (!res.ok) throw new Error("Error al obtener usuarios");
  
  const data = await res.json();
  return data; 
}
const columns = [
	{
		name: 'Cedula',
		selector: row => row.Cedula,
	},
	{
		name: 'Nombre',
		selector: row => row.Nombre,
	},
    	{
		name: 'FechaCreacion',
		selector: row => row.FechaCreacion,
	},

];

const data = [
  	{
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
	},
]
const nuevo =  await loadUsuario();

export default  function page() {
   
            

  
    
  return (
<div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-3/4 md:w-1/2 lg:w-2/5 p-6 border rounded-xl shadow-md bg-white">
     <DataTable className='flex items-center px-20'
			columns={columns}
			data={nuevo}
            pagination 
            paginationPerPage={4}
		/>
</div>
</div>
  )
}

