import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import Items from "../components/Items"

const ItemListContext = createContext();

export const useItemList = () => useContext(ItemListContext);

export const ItemListProvider = ({ children }) => {
    const [itemList, setItemList] = useState([]);
    const [listEdit, setListEdit] = useState(false);

    const relationMap = {
        [Items[0].number]: [ // Frasco 100g Ultrasom
            { type: Items[12].type, name: Items[12].name, divisor: Items[0].divisor, number: Items[12].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[1].number]: [ // Frasco 100g Ecg
            { type: Items[12].type, name: Items[12].name, divisor: Items[1].divisor, number: Items[12].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[2].number]: [ // Frasco 250g Ultrasom
            { type: Items[13].type, name: Items[13].name, divisor: Items[2].divisor, number: Items[13].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[3].number]: [ // Frasco 250g Ecg
            { type: Items[13].type, name: Items[13].name, divisor: Items[3].divisor, number: Items[13].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[4].number]: [ // Frasco 300g Ultrasom
            { type: Items[13].type, name: Items[13].name, divisor: Items[4].divisor, number: Items[13].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[5].number]: [ // Frasco 300g Ecg
            { type: Items[13].type, name: Items[13].name, divisor: Items[5].divisor, number: Items[13].number },
            { type: Items[16].type, name: Items[16].name, divisor: 1, number: Items[16].number },
        ],
        [Items[6].number]: [ // Frasco 500g
            { type: Items[13].type, name: Items[13].name, divisor: Items[6].divisor, number: Items[13].number },
            { type: Items[17].type, name: Items[17].name, divisor: 1, number: Items[17].number },
        ],
        [Items[7].number]: [ // Frasco 1000g
            { type: Items[14].type, name: Items[14].name, divisor: Items[7].divisor, number: Items[14].number },
            { type: Items[17].type, name: Items[17].name, divisor: 1, number: Items[17].number },
        ],
        [Items[8].number]: [ // Bag Ultrassom
            { type: Items[15].type, name: Items[15].name, divisor: Items[8].divisor, number: Items[15].number },
            { type: Items[18].type, name: Items[18].name, divisor: 1, number: Items[18].number },
            { type: Items[17].type, name: Items[17].name, divisor: 1, number: Items[17].number },
            { type: Items[20].type, name: Items[20].name, divisor: 1, number: Items[20].number },
        ],
        [Items[9].number]: [ // Bag Eletrocardiograma
            { type: Items[15].type, name: Items[15].name, divisor: Items[9].divisor, number: Items[15].number },
            { type: Items[18].type, name: Items[18].name, divisor: 1, number: Items[18].number },
            { type: Items[17].type, name: Items[17].name, divisor: 1, number: Items[17].number },
            { type: Items[21].type, name: Items[21].name, divisor: 1, number: Items[21].number },
        ],
        [Items[10].number]: [ // Bag Meios de Contato
            { type: Items[15].type, name: Items[15].name, divisor: Items[10].divisor, number: Items[15].number },
            { type: Items[18].type, name: Items[18].name, divisor: 1, number: Items[18].number },
            { type: Items[17].type, name: Items[17].name, divisor: 1, number: Items[17].number },
            { type: Items[22].type, name: Items[22].name, divisor: 1, number: Items[22].number },
        
        ],
        [Items[11].number]: [ // Balde
        ],
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

        const relations = relationMap[newItem.number];
        const newItems = [];

        if (relations && relations.length && newItem.qtd % relations[0].divisor !== 0) {
            alert("Coloque uma quantidade que seja múltiplo de " + relations[0].divisor + " para o item " + newItem.item);
            return;
        }

        // Adiciona o item principal
        newItems.push({
            id: uuidv4(),
            type: newItem.type,
            name: newItem.name,
            quantity: newItem.qtd,
            number: newItem.number,
        });

        if (relations) {
            relations.forEach(relation => {
                const relatedQtd = newItem.qtd / relation.divisor;
                if (!isNaN(relatedQtd) && relatedQtd > 0) {
                    newItems.push({
                        id: uuidv4(),
                        type: relation.type,
                        name: relation.name,
                        quantity: relatedQtd,
                        number: relation.number,
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