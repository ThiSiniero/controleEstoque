import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-300 px-8 py-6">
            <div className="font-bold text-2xl">Controle de Estoque</div>
            <ul className="flex gap-2 list-none m-0 p-0 pr-32">
                <li>
                    <Link to="/" className="text-lg font-bold border border-black px-4 py-2 rounded-lg hover:text-gray-400 hover:border-gray-400">Estoque</Link>
                </li>
                <li>
                    <Link to="/add" className="text-lg font-bold border border-black px-4 py-2 rounded-lg hover:text-green-600 hover:border-green-600">Adicionar</Link>
                </li>
                <li>
                    <Link to="/rm" className="text-lg font-bold border border-black px-4 py-2 rounded-lg hover:text-red-400 hover:border-red-400">Remover</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
