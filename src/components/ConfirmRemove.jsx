import React from 'react';
import { useItems } from "../context/ItemListContext";
import { useProducts } from "../context/ProductsContext"; 

const ConfirmRemove = () => {
    const { itemList, clearItems, setListEdit } = useItems();
    const { refreshProducts } = useProducts();

    const handleConfirm = async () => {
        try {
            for (const item of itemList) {

                await fetch(`https://controleestoque-33k5.onrender.com/estoque/rm/${item.number}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ quantity: item.quantity }),
                });
            }

            await refreshProducts(); // atualiza os produtos após remover

            alert("Estoque atualizado com sucesso!");
            clearItems();
            setListEdit(false);
        } catch (error) {
            console.error("Erro ao atualizar estoque:", error);
            alert("Erro ao atualizar o estoque.");
        }
    };

    return (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg min-w-[300px] shadow-lg text-center text-black">
                <p className="mb-6 text-lg"> Tem certeza que deseja <span className="text-red-600 font-bold">REMOVER</span> isto?</p>

                <ul className="my-4">
                    {itemList.map(item => (
                        <li key={item.id}>{item.name} - {item.quantity}</li>
                    ))}
                </ul>

                <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 bg-red-400 rounded hover:bg-red-700 transition" onClick={() => setListEdit(false)} >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition" onClick={() => {handleConfirm()} }>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmRemove;
