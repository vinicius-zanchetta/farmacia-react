import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { ToastAlerta } from '../../../utils/ToastAlerta';

function FormCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }


    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)

                ToastAlerta('Categoria atualizada com sucesso', 'sucesso')
                retornar()

            } catch (error: any) {
                      ToastAlerta('Erro ao atualizar a Categoria', 'erro')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                ToastAlerta('Categoria cadastrada com sucesso', 'sucesso')

            } catch (error: any) {
                      ToastAlerta('Erro ao cadastrar a Categoria', 'erro')

            }
        }
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <h2 className='text-2xl font-bold'>
            {id === undefined ? 'Cadastrar Nova Categoria' : 'Editar Categoria'}
            </h2>
            <div className='flex flex-col items-center my-4 bg-green-500  px-4 w-[28rem]'>

                <form className=" flex flex-col gap-4 pt-2 pb-4 w-full" onSubmit={gerarNovoTema}>
                    <label htmlFor="descricao" className='text-xl text-center'>
                        Nome da Categoria
                    </label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name='nome'
                        className="py-1 px-2 outline-none"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                    <button
                        className="bg-green-400 flex justify-around py-1 px-2"
                        type="submit"
                    >
                        {id === undefined ? 'Cadastrar' : 'Editar'}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default FormCategoria