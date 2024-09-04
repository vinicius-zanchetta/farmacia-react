import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-48 py-4 bg-green-200'>
        <div>Logo</div>
        <div>
            <ul className='flex gap-8'>
                <li>Produtos</li>
                <li>Categorias</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar