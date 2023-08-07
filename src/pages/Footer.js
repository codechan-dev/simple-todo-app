import React from 'react'

const Footer = ({items}) => {
  return (
    <footer>
    <div className='footer'> number of  {items} {items===1 ? "task":"tasks"}</div>

    
    </footer>)
}

export default Footer