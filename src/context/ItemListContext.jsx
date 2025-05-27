import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Items from "../components/Items"

const ItemListContext = createContext();

export const useItemList = () => useContext(ItemListContext);

export const ItemListProvider = ({ children }) => {
    const [itemList, setItemList] = useState([]);
    const [listEdit, setListEdit] = useState(false);

    const relationMap = {
        "frasco100u": [{ name: "caixa100", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco100e": [{ name: "caixa100", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco250u": [{ name: "caixa250", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco250e": [{ name: "caixa250", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco300u": [{ name: "caixa300", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco300e": [{ name: "caixa300", divisor: 50 }, { name: "tampaBico", divisor: 1 }],
        "frasco500": [{ name: "caixa500", divisor: 50 }, { name: "tampaRosca", divisor: 1 }],
        "frasco1000": [{ name: "caixa1000", divisor: 50 }, { name: "tampaRosca", divisor: 1 }],
        "bagUltrasom": [{ name: "caixaBag", divisor: 50 }, { name: "sacoZip", divisor: 1 }, { name: "tampaRosca", divisor: 1 }, { name: "rotuloUltrasom", divisor: 1 }],
        "bagEcg": [{ name: "caixaBag", divisor: 50 }, { name: "sacoZip", divisor: 1 }, { name: "tampaRosca", divisor: 1 }, { name: "rotuloEcg", divisor: 1 }],
        "bagMeio": [{ name: "caixaBag", divisor: 50 }, { name: "sacoZip", divisor: 1 }, { name: "tampaRosca", divisor: 1 }, { name: "rotuloMeio", divisor: 1 }],
        "balde": []
    };


    const addItem = (addItem) => {

        const newItem = Items.find(item => item.number === addItem.number);
        newItem.qtd = addItem.qtd;

        if (newItem.qtd === "") {
            alert("Preencha a quantidade!");
            return
        }
        setItemList([...itemList, { id: uuidv4(), type: newItem.type, name: newItem.name, quantity: newItem.qtd, number: newItem.number }]);

    };

    const addSimilarItem = (addItem) => {

        const newItem = Items.find(item => item.number === addItem.number);
        newItem.qtd = addItem.qtd;

        if (newItem.qtd === "") {
            alert("Preencha a quantidade!");
            return;
        }

        const relations = relationMap[newItem.name];

        if (relations && relations.length && newItem.qtd % newItem.divisor !== 0) {
            alert("Coloque uma quantidade que seja múltiplo de " + newItem.divisor + " para o item " + newItem.name);
            return;
        }

        // Adiciona o item principal
        const newItems = [];

        newItems.push({
            id: uuidv4(),
            type: newItem.type,
            name: newItem.name,
            quantity: newItem.qtd,
            number: newItem.number,
        });

        if (relations) {
            relations.forEach(relation => {
                const relacionedItem = Items.find(i => i.name === relation.name);
                const relationQuantity = newItem.qtd / relation.divisor;

                if (!isNaN(relationQuantity) && relationQuantity > 0) {
                    newItems.push({
                        id: uuidv4(),
                        type: relacionedItem.type,
                        name: relacionedItem.name,
                        quantity: relationQuantity,
                        number: relacionedItem.number,
                    });
                }
            });
        }
        setItemList(prevList => [...prevList, ...newItems]);
    };

    const rmItem = (id) => {
        const newList = itemList.filter((item) => item.id !== id);
        setItemList(newList);
    }

    const clearItems = () => setItemList([]);

    return (
        <ItemListContext.Provider value={{ itemList, addItem, addSimilarItem, rmItem, clearItems, listEdit, setListEdit }}>
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