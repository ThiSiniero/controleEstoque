import React from 'react';
import { useItems } from "../context/ItemListContext";

const ConfirmSend = () => {
    const { itemList, setListEdit } = useItems();

    return (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg min-w-[300px] shadow-lg text-center text-black">
                <p className="mb-6 text-lg">Tem certeza que deseja ADICIONAR isto?</p>

                <ul className="my-4">
                    {itemList.map(item => (
                        <li key={item.id}>{item.name} - {item.quantity}</li>
                    ))}
                </ul>

                <div className="flex justify-center gap-4">
                    <button className="px-4 py-2 bg-red-400 rounded hover:bg-red-700 transition" onClick={() => setListEdit(false)} >
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition" onClick={() => {alert("Items added to stock"); setListEdit(false)} } >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSend;
