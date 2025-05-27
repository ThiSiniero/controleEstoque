import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const ItemListContext = createContext();

export const useItemList = () => useContext(ItemListContext);

export const ItemListProvider = ({ children }) => {
    const [itemList, setItemList] = useState([]);
    const [listEdit, setListEdit] = useState(false);

    const addItem = (newItem) => {
        if (newItem.qtd === "" || newItem.item === "") {
            alert("Preencha o formulário corretamente!");
            return
        }
        setItemList([...itemList, { id: uuidv4(), type: newItem.itemType, name: newItem.item, quantity: newItem.qtd, number: newItem.number }]);

    };

    const addSimilarItem = (newItem) => {
        switch (newItem.number) {
            case "68349cc4a5dac4c6638972a2":
                let itemType = "caixa";
                let item = "caixa4";
                let qtd = (newItem.qtd / 50);
                let number = "68349cc4a5dac4c6638972b1";
                console.log(itemType, item, qtd, number);
                addItem(itemType, item, qtd, number);
                break;
            case "68349cc4a5dac4c6638972a3":
                itemType = "caixa";
                item = "caixa4";
                qtd = (newItem.qtd / 50);
                number = "68349cc4a5dac4c6638972b1";
                console.log(itemType, item, qtd, number);
                addItem(itemType, item, qtd, number);
                break;
            case "68349cc4a5dac4c6638972a4":
                itemType = "caixa";
                item = "caixa1";
                qtd = (newItem.qtd / 48);
                number = "68349cc4a5dac4c6638972ae";
                console.log(itemType, item, qtd, number);
                addItem(itemType, item, qtd, number);
                break;
            case "68349cc4a5dac4c6638972a5":
                itemType = "caixa";
                item = "caixa1";
                qtd = (newItem.qtd / 48);
                number = "68349cc4a5dac4c6638972ae";
                console.log(itemType, item, qtd, number);
                addItem(itemType, item, qtd, number);
                break;
            default:
                break;
        }
    }

    const rmItem = (id) => {
        const newList = itemList.filter((item) => item.id !== id);
        setItemList(newList);
    }

    const clearItems = () => setItemList([]);

    return (
        <ItemListContext.Provider value={{ itemList, addItem, rmItem, clearItems, listEdit, setListEdit }}>
            {children}
        </ItemListContext.Provider>
    );
};

export const useItems = () => {
    const context = useContext(ItemListContext);
    if (!context) {
        throw new Error("useItems deve ser usado dentro de um ItemProvider");
    }
    return context;
};