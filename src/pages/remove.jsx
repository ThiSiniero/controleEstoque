import React, { useState } from "react";
import { useItems } from "../context/ItemListContext";

import FromList from "../components/FormList";
import ListList from "../components/ListList";
import ConfirmRemove from "../components/ConfirmRemove";

const AddItemPage = () => {
    const { itemList, clearItems, listEdit, setListEdit } = useItems();

    return (
        <div className="bg-gray-400 min-h-screen">
            <h1 className="text-4xl text-center mb-8 pt-8 font-semibold">Remover Estoque</h1>

            <div className="w-[50%] mx-auto border border-gray-300 rounded py-14 px-10 bg-gray-800 text-white rounded-3xl">

                <FromList />

                <h2 className="pt-14 text-xl text-center font-semibold">Lista de items a serem removidos:</h2>

                {itemList.length === 0 && (
                    <p className="text-center text-gray-300 pt-20"> Nenhum item a ser removido.</p>
                )}

                <ListList />

                {itemList.length >= 1 ? <div className="flex justify-center">
                    <button className="bg-red-500 hover:bg-red-700 text-white rounded p-4 font-semibold mt-8 mr-4" onClick={() => clearItems()}>
                        Cancelar
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white rounded p-4 font-semibold mt-8" onClick={() => setListEdit(true)}>
                        Remover do Estoque
                    </button>
                </div> : null}

                {listEdit && <ConfirmRemove />}


            </div>


        </div>
    );
};

export default AddItemPage;