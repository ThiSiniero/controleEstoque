import React, {useState} from "react";
import { useItems } from "../context/ItemListContext";

import FromList from "../components/FormList";
import ListList from "../components/ListList";

const AddItemPage = () => {
   const { itemList, rmItem } = useItems();

    return (
        <div className="bg-gray-400 min-h-screen">
            <h1 className="text-4xl text-center mb-8 pt-8 font-semibold">Remover Estoque</h1>
            
            <div className="w-[50%] mx-auto border border-gray-300 rounded py-14 px-10 bg-gray-800 text-white rounded-3xl">
                
                <FromList/>
                
                <h2 className="pt-14 text-xl text-center font-semibold">Lista de items a serem removidos:</h2>

                <ListList/>

                    {itemList.length >= 1 ? <div className="flex justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white rounded p-4 font-semibold mt-8" onClick={() => alert(itemList.map(item => item.name + " - " + item.quantity))}>
                            Remover do Estoque
                        </button>
                    </div> : null}
                    

                    {itemList.length === 0 && (
                        <p className="text-center text-gray-300 pt-20"> Nenhum item a ser removido.</p>
                    )}

                
            </div>


        </div>
    );
};

export default AddItemPage;