import React, { createContext, useContext, useState, useEffect } from 'react'

export const ProductsContext = createContext();


export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/estoque")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Erro ao buscar estoque:", err));
    }, []);

    // Separar produtos em blocos
    const frascos = products.filter(p => p.name.startsWith('Frasco'));
    const caixas = products.filter(p => p.name.startsWith('Caixa'));
    const etiquetas = products.filter(p => p.name.startsWith('Etiqueta'));

    return (
        <ProductsContext.Provider value={{ frascos, caixas, etiquetas }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts deve ser usado dentro de um ProductsProvider");
  }
  return context;
};