import React, { useState } from "react";
import { useItems } from "../context/ItemListContext";

import Items from "./Items";

const FormList = ({ action }) => {

    const { addItem, addSimilarItem } = useItems();
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100u");
    const [itemType, setItemType] = useState("frasco");
    const [number, setNumber] = useState("68349cc4a5dac4c6638972a2");
    
    const handleItemChange = (e) => {
        const newType = e.target.value;
        setItemType(newType);

        // Resetar item e número com os primeiros valores válidos do novo tipo
        if (newType === "frasco") {
            setItem(Items[0].name);
            setNumber(Items[0].number);
        } else if (newType === "caixa") {
            setItem(Items[12].name);
            setNumber(Items[12].number);
        } else if (newType === "etiqueta") {
            setItem(Items[20].name);
            setNumber(Items[20].number);
        } else if (newType === "tampa") {
            setItem(Items[16].name);
            setNumber(Items[16].number);
        }
    }



    return (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            <div className="col-span-1">
                <label className="block"> Tipo de Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={handleItemChange} >
                    <option value="frasco">Frasco </option>
                    <option value="caixa">Caixa</option>
                    <option value="etiqueta">Etiqueta</option>
                    <option value="tampa">Tampa</option>
                </select>
            </div>

            <div className="col-span-2">
                <label className="block"> Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => { setItem(e.target.value); setNumber(e.target.selectedOptions[0].id) }}>

                    {itemType === "frasco" && (
                        <>
                            {Items
                                .filter(item => item.type === "frasco")
                                .map(item => {
                                    const displayNames = {
                                        frasco100u: "Frasco 100g Ultrasom",
                                        frasco100e: "Frasco 100g Eletrocardiograma",
                                        frasco250u: "Frasco 250g Ultrasom",
                                        frasco250e: "Frasco 250g Eletrocardiograma",
                                        frasco300u: "Frasco 300g Ultrasom",
                                        frasco300e: "Frasco 300g Eletrocardiograma",
                                        frasco500: "Frasco 500g",
                                        frasco1000: "Frasco 1000g",
                                        frascou5000ubg: "Bag Ultrassom",
                                        frascou5000ebg: "Bag Eletrocardiograma",
                                        frascou5000uebg: "Bag Meios de Contato",
                                        frascou5000b: "Balde"
                                    };
                                    return (
                                        <option key={item.number} value={item.name} id={item.number}>
                                            {displayNames[item.name]}
                                        </option>
                                    );
                                })}
                        </>
                    )}

                    {itemType === "caixa" && <>
                        {Items
                                .filter(item => item.type === "caixa")
                                .map(item => {
                                    const displayNames = {
                                        caixaFrasco: "Caixa Frasco",
                                        caixa1000: "Caixa 1000g",
                                        caixaBag: "Caixa Bag",
                                        caixa100: "Caixa 100g",
                                    };
                                    return (
                                        <option key={item.number} value={item.name} id={item.number}>
                                            {displayNames[item.name]}
                                        </option>
                                    );
                                })}
                    </>}

                    {itemType === "etiqueta" && <>
                        {Items
                                .filter(item => item.type === "etiqueta")
                                .map(item => {
                                    const displayNames = {
                                        etqBagU: "Bag Ultrassom",
                                        etqBagE: "Bag Eletrocardiograma",
                                        etqBagUE: "Bag Meios de Contato",
                                        etqMilU: "1000 Ultrassom",
                                        etqMilE: "1000 Eletrocardiograma",
                                        etqMilUE: "1000 Meios de Contato",
                                        etq500U: "500 Ultrassom",
                                        etq500E: "500 Eletrocardiograma",
                                        etq500UE: "500 Meio de Contato"
                                    };
                                    return (
                                        <option key={item.number} value={item.name} id={item.number}>
                                            {displayNames[item.name]}
                                        </option>
                                    );
                                })}
                    </>}

                    {itemType === "tampa" && <>
                        {Items
                                .filter(item => item.type === "tampa")
                                .map(item => {
                                    const displayNames = {
                                        tampaAF: "Tampa Abre-Fecha",
                                        tampaBico: "Tampa Bico",
                                        tampaBag: "Tampa Bag",
                                        tampaPressao: "Tampa Pressão"
                                    };
                                    return (
                                        <option key={item.number} value={item.name} id={item.number}>
                                            {displayNames[item.name]}
                                        </option>
                                    );
                                })}
                    </>}

                </select>
            </div>

            <div className="col-span-1">
                <label className="block"> Quantidade </label>
                <input type="number" min="1" className="w-full border border-gray-300 rounded p-2 text-black" placeholder="ex: 50" onChange={(e) => setQtd(e.target.value)} />
            </div>

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold col-span-2" onClick={() => action == "add" ? addItem({ itemType, item, qtd, number }) : addSimilarItem({ itemType, item, qtd, number })}>
                Adicionar à Lista
            </button>
        </div>
    )
}

export default FormList;