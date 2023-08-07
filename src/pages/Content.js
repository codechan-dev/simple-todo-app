import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import  "../App.css"



const Content = ({items,setitems}) => {
 

   const dummy=(id)=>{
     const listItem= items.filter((item)=>item.id !== id)
   setitems(listItem)
   
   }

const handlecheck=(id)=>{
  const listItem= items.map((item)=>item.id===id ?
   {...item,checked:! item.checked}:item)
   setitems(listItem)
}
   




  return (
    

    <main>
     
      <center >
        {(items.length) ? null :<p style={{color:'red'} }>list is empty</p>}


        <div className='contains'>
 <ul>
     {items.map((item) => (
      <li key={item.id}>
        <input type='checkbox' onChange={ ()=>handlecheck(item.id)} checked={item.checked}></input>
        <label style={(item.checked) ? {textDecoration:'line-through'} :null }>{item.item}</label>
        <button  onClick={()=> dummy(item.id)} ><FiTrash2/></button>
      </li>
     ))}
</ul> 
</div>
</center>

    
    </main>
   
  )
}

export default Content