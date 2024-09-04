import CardCategoria from "../cardCategoria/CardCategoria"
import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria"
import { listar } from "../../../services/Service";
import { Link } from "react-router-dom";


function ListarCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
            console.log(categorias);

        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <div className="sm:mx-4 md:mx-24 lg:mx-36 my-4">
            <div className="h-12 flex justify-end my-4">
                <Link to="/cadastrarCategoria">
                    <button
                        className=" py-2 px-8 bg-green-300 rounded border-[1px] border-green-500 border-solid">
                        NOVA CATEGORIA
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-3 gap-4  ">
                {categorias.map((categoria) => (
                    <>
                        <CardCategoria key={categoria.id} categoria={categoria} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default ListarCategoria