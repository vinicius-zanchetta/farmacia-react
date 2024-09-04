import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='flex justify-between px-48 py-4 bg-green-200'>
        <Link to="/">
        <div className="font-bold text-xl ">GENERACIÓN</div>
        </Link>
        <div>
            <ul className='flex gap-8'>
                <Link to="/">
                <li>Produtos</li>
                </Link>
                <Link to="/categorias">
                <li>Categorias</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar