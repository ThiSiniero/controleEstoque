import React from 'react';
import { useItems } from "../context/ItemListContext";

const ListList = () => {
    const { itemList, rmItem } = useItems();


    return (
        <div>
            {itemList.length >= 1 &&
                <div className="grid grid-cols-1 md:grid-cols-4 items-center border-b pb-1 mb-4 pt-16 text-lg font-semibold">
                    <p>Item</p>
                    <p>Tipo</p>
                    <p>Quantidade</p>
                    <p className="md:text-end">Cancelar</p>
                </div>
            }

            {itemList.length >= 1 && itemList.map(item => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center border-b py-1 text-lg">
                    <span>{item.name}</span>
                    <span>{item.type}</span>
                    <span>{item.quantity} unidades</span>
                    <button className="text-sm text-red-500 hover:text-red-200 text-start md:text-end" onClick={() => rmItem(item.id)}>Remover</button>
                </div>
            ))}

        </div>
    );
};

export default ListList;