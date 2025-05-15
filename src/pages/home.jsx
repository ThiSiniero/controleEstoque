import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Lista de produtos
    const products = [
        { name: 'Frasco 100u', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 100e', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 250u', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 250e', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 300u', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 300e', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 500', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 1000', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 5000ubg', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 5000ebg', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 5000uebg', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Frasco 5000b', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.KWiFziF3jqzP0H7I7VBeFgHaHa?w=194&h=195&c=7&r=0&o=7&cb=iwp2&pid=1.7&rm=3' },
        { name: 'Caixa Frascos', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
        { name: 'Caixa Bag', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
        { name: 'Caixa Mil', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
        { name: 'Caixa Cem', quantity: 0, logo: 'https://th.bing.com/th/id/OIP.OSV6pUOkXlb3rBTed9SBbAHaFC?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain' },
    ];

    // Separar produtos em blocos
    const frascos = products.filter(p => p.name.startsWith('Frasco'));
    const caixas = products.filter(p => p.name.startsWith('Caixa'));

    return (
        <div className='text-center bg-gray-800 text-white min-h-screen'>
            <p className='text-4xl mb-8 pt-8 font-semibold'>Estoque</p>

            <div className='grid md:grid-cols-2 gap-6 w-[20%] mx-auto items-center mb-8'>
                <Link className='bg-blue-500 border rounded-lg py-4 hover:bg-blue-700' to="/add">Adicionar Estoque</Link>
                <Link className='bg-yellow-500 border rounded-lg py-4 hover:bg-yellow-600' to="/rm">Remover Estoque</Link>
            </div>
            
            <p className='text-4xl mb-8 font-semibold'>Frascos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 w-[95%] mx-auto">
                    {frascos.map((frasco) => (
                        <div key={frasco.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4">
                            <img src={frasco.logo} alt="" className='h-[200px]'/>
                            <p className="text-lg font-medium">{frasco.name}</p>
                            <p className='font-bold text-xl mt-4 text-red-500'>{frasco.quantity}</p>
                        </div>
                    ))}
            </div>
            <p className='text-4xl my-8 font-semibold'>Caixas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 w-[95%] mx-auto">
                    {caixas.map((caixa) => (
                        <div key={caixa.name} className="competence-item flex flex-col bg-gray-200 text-black rounded-lg p-4">
                            <img src={caixa.logo} alt="" className='h-[200px]'/>
                            <p className="text-lg font-medium">{caixa.name}</p>
                            <p className='font-bold text-xl mt-4 text-red-500'>{caixa.quantity}</p>
                        </div>
                    ))}
            </div>

        
        </div>
    );
};

export default Home;