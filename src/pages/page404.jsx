import React from 'react';

const Page404 = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-8xl font-bold m-0">404</h1>
        <h2 className="mt-4 mb-2 text-2xl font-semibold">Página não encontrada</h2>
        <p className="mb-8">A página que você procura não existe ou foi movida.</p>
        <a href="/" className="mt-4 text-blue-600 font-bold hover:underline">
            Voltar para o início
        </a>
    </div>
);

export default Page404;
