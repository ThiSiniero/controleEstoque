import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const ItemListContext = createContext();

export const useItemList = () => useContext(ItemListContext);

export const ItemListProvider = ({ children }) => {
    const [itemList, setItemList] = useState([]);

    const addItem = (newItem) => {
        if (newItem.qtd === "" || newItem.item === "") {
            alert("Preencha o formulário corretamente!");
            return
        }
        setItemList([...itemList, { id: uuidv4(), type: newItem.itemType, name: newItem.item, quantity: newItem.qtd }]);

    };

    const rmItem = (id) => {
        const newList = itemList.filter((item) => item.id !== id);
        setItemList(newList);
    }

    const clearItems = () => setItemList([]);

    return (
        <ItemListContext.Provider value={{ itemList, addItem, rmItem, clearItems }}>
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