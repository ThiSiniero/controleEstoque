import React, { useState } from "react";
import { useItems } from "../context/ItemListContext";

const AddList = () => {

    const { addItem } = useItems();
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100u");
    const [itemType, setItemType] = useState("frasco");
    const [number, setNumber] = useState(1);

    const handleItemChange = (e) => {
        const newType = e.target.value;
        setItemType(newType);

        // Resetar item e número com os primeiros valores válidos do novo tipo
        if (newType === "frasco") {
            setItem("frasco100u");
            setNumber(1);
        } else if (newType === "caixa") {
            setItem("caixa1");
            setNumber(13);
        } else if (newType === "estiqueta") {
            setItem("etqBagU");
            setNumber(20);
        }
    }



    return (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            <div className="col-span-1">
                <label className="block"> Tipo de Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={handleItemChange} >
                    <option value="frasco">Frasco </option>
                    <option value="caixa">Caixa</option>
                    <option value="estiqueta">Etiqueta</option>
                </select>
            </div>

            <div className="col-span-2">
                <label className="block"> Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => { setItem(e.target.value); setNumber(e.target.selectedOptions[0].id) }}>

                    {itemType === "frasco" && <>
                        <option value="frasco100u" id="1">Frasco 100g Ultrasom</option>
                        <option value="frasco100e" id="2">Frasco 100g Eletrocardiograma</option>
                        <option value="frasco250u" id="3">Frasco 250g Ultrasom</option>
                        <option value="frasco250e" id="4">Frasco 250g Eletrocardiograma</option>
                        <option value="frasco300u" id="5">Frasco 300g Ultrasom</option>
                        <option value="frasco300e" id="6">Frasco 300g Eletrocardiograma</option>
                        <option value="frasco500" id="7">Frasco 500g </option>
                        <option value="frasco1000" id="8">Frasco 1000g </option>
                        <option value="frascou5000ubg" id="9">Frasco Bag Ultrassom</option>
                        <option value="frascou5000ebg" id="10">Frasco Bag Eletrocardiograma</option>
                        <option value="frascou5000uebg" id="11">Frasco Bag Meios de Contato</option>
                        <option value="frascou5000b" id="12">Frasco Balde</option>
                    </>
                    }

                    {itemType === "caixa" && <>
                        <option value="caixa1" id="13">Caixa Frasco</option>
                        <option value="caixa2" id="15">Caixa Mil</option>
                        <option value="caixa3" id="14">Caixa Bag</option>
                        <option value="caixa4" id="16">Caixa Cem</option>
                    </>}

                    {itemType === "estiqueta" && <>
                        <option value="etqBagU" id="20">Bag Ultrassom</option>
                        <option value="etqBagE" id="21">Bag Eletrocardiograma</option>
                        <option value="etqBagUE" id="22">Bag Meios de Contato</option>
                        <option value="etqMilU" id="17">1000 Ultrassom</option>
                        <option value="etqMilE" id="18">1000 Eletrocardiograma</option>
                        <option value="etqMilUE" id="19">1000 Meios de Contato</option>
                        <option value="etq500U" id="23">500 Ultrassom</option>
                        <option value="etq500E" id="24">500 Eletrocardiograma</option>
                        <option value="etq500UE" id="25">500 Meios de Contato</option>
                    </>}

                </select>
            </div>

            <div className="col-span-1">
                <label className="block"> Quantidade </label>
                <input type="number" min="1" className="w-full border border-gray-300 rounded p-2 text-black" placeholder="ex: 5" onChange={(e) => setQtd(e.target.value)} />
            </div>

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold col-span-2" onClick={() => addItem({ itemType, item, qtd, number })}>
                Adicionar à Lista
            </button>
        </div>
    )
}

export default AddList;