import React from 'react';
import { useProducts } from "../context/ProductsContext";

const ListProducts = () => {
    const { frascos, caixas, etiquetas } = useProducts();

    return (
        <>

            <p className='text-4xl mb-8 font-semibold'>Frascos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 w-[95%] mx-auto">
                    {frascos.map((frasco) => (
                        <div key={frasco.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4">
                            <img src={frasco.logo} alt="" className='h-[200px]'/>
                            <p className="text-lg font-medium">{frasco.name}</p>
                            <p className={`font-bold text-2xl mt-4 ${frasco.quantity < 300 ? 'text-red-600' : ''}`}>{frasco.quantity}</p>
                        </div>
                    ))}
            </div>

            <p className='text-4xl my-8 font-semibold'>Caixas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-[95%] mx-auto">
                    {caixas.map((caixa) => (
                        <div key={caixa.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4">
                            <img src={caixa.logo} alt="" className='h-[200px]'/>
                            <p className="text-lg font-medium">{caixa.name}</p>
                            <p className={`font-bold text-2xl mt-4 ${caixa.quantity < 400 ? 'text-red-600' : ''}`}>{caixa.quantity}</p>
                        </div>
                    ))}
            </div>

            <p className='text-4xl my-8 font-semibold'>Etiquetas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 w-[95%] mx-auto">
                    {etiquetas.map((etiqueta) => (
                        <div key={etiqueta.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4 justify-between">
                            <img src={etiqueta.logo} alt="" className='h-[200px]'/>
                            <p className="text-lg font-medium">{etiqueta.name}</p>
                            <p className={`font-bold text-2xl mt-4 ${etiqueta.quantity < 200 ? 'text-red-600' : ''}`}>{etiqueta.quantity}</p>
                        </div>
                    ))}
            </div>

        </>
    )
}

export default ListProducts;