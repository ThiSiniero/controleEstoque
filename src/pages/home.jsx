import React from 'react';
import { Link } from 'react-router-dom';

import ListProducts from '../components/ListProducts';

const Home = () => {

    return (
        <div className='text-center bg-gray-800 text-white min-h-screen'>
            <p className='text-4xl mb-8 pt-8 font-semibold'>Estoque</p>

            <div className='grid md:grid-cols-2 gap-6 w-[20%] mx-auto items-center mb-8'>
                <Link className='bg-blue-500 border rounded-lg py-4 hover:bg-blue-700' to="/add">Adicionar Estoque</Link>
                <Link className='bg-yellow-500 border rounded-lg py-4 hover:bg-yellow-600' to="/rm">Remover Estoque</Link>
            </div>

            <ListProducts />
        </div>
    );
};

export default Home;