import React from 'react';

const Home = () => {
    // Lista de produtos
    const products = [
        { name: 'Frascos 100u', quantity: 0, logo: '/images/frascos-100u.png' },
        { name: 'Frascos 100e', quantity: 0, logo: '/images/frascos-100e.png' },
        { name: 'Frascos 250u', quantity: 0, logo: '/images/frascos-250u.png' },
        { name: 'Frascos 250e', quantity: 0, logo: '/images/frascos-250e.png' },
        { name: 'Frascos 300u', quantity: 0, logo: '/images/frascos-300u.png' },
        { name: 'Frascos 300e', quantity: 0, logo: '/images/frascos-300e.png' },
        { name: 'Frascos 500', quantity: 0, logo: '/images/frascos-500.png' },
        { name: 'Frascos 1000', quantity: 0, logo: '/images/frascos-1000.png' },
        { name: 'Frascos 5000ubg', quantity: 0, logo: '/images/frascos-5000ubg.png' },
        { name: 'Frascos 5000ebg', quantity: 0, logo: '/images/frascos-5000ebg.png' },
        { name: 'Frascos 5000uebg', quantity: 0, logo: '/images/frascos-5000uebg.png' },
        { name: 'Frascos 5000b', quantity: 0, logo: '/images/frascos-5000b.png' },
        { name: 'Caixa Frascos', quantity: 0, logo: '/images/caixa-frascos.png' },
        { name: 'Caixa Bag', quantity: 0, logo: '/images/caixa-bag.png' },
        { name: 'Caixa Mil', quantity: 0, logo: '/images/caixa-mil.png' },
        { name: 'Caixa Cem', quantity: 0, logo: '/images/caixa-cem.png' },
    ];

    // Separar produtos em blocos
    const frascos = products.filter(p => p.name.startsWith('Frascos'));
    const caixas = products.filter(p => p.name.startsWith('Caixa'));

    return (
        <div className='text-center bg-gray-800 text-white min-h-screen'>
            <h1 className='text-3xl font-bold'>Controle de Estoque</h1>
            <p className='text-lg mt-2 mb-10'>Gerencie seus produtos e estoque de forma eficiente.</p>
            <p className='text-3xl mb-8 font-semibold'>Frascos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-[95%] mx-auto">
                    {frascos.map((frasco) => (
                        <div key={frasco.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4">
                            <p className="text-lg font-medium">{frasco.name}</p>
                            <p>{frasco.quantity}</p>
                        </div>
                    ))}
            </div>

        
        </div>
    );
};

export default Home;