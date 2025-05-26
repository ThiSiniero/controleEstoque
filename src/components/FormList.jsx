import React, { useState } from "react";
import { useItems } from "../context/ItemListContext";

const AddList = () => {

    const { addItem } = useItems();
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100u");
    const [itemType, setItemType] = useState("frasco");
    const [number, setNumber] = useState("68349cc4a5dac4c6638972a2");

    const handleItemChange = (e) => {
        const newType = e.target.value;
        setItemType(newType);

        // Resetar item e número com os primeiros valores válidos do novo tipo
        if (newType === "frasco") {
            setItem("frasco100u");
            setNumber("68349cc4a5dac4c6638972a2");
        } else if (newType === "caixa") {
            setItem("caixa1");
            setNumber("68349cc4a5dac4c6638972ae");
        } else if (newType === "estiqueta") {
            setItem("etqBagU");
            setNumber("68349cc4a5dac4c6638972b5");
        } else if (newType === "tampa") {
            setItem("tampa1");
            setNumber("68349cc4a5dac4c6638972bb");
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
                    <option value="tampa">Tampa</option>
                </select>
            </div>

            <div className="col-span-2">
                <label className="block"> Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => { setItem(e.target.value); setNumber(e.target.selectedOptions[0].id) }}>

                    {itemType === "frasco" && <>
                        <option value="frasco100u" id="68349cc4a5dac4c6638972a2">Frasco 100g Ultrasom</option>
                        <option value="frasco100e" id="68349cc4a5dac4c6638972a3">Frasco 100g Eletrocardiograma</option>
                        <option value="frasco250u" id="68349cc4a5dac4c6638972a4">Frasco 250g Ultrasom</option>
                        <option value="frasco250e" id="68349cc4a5dac4c6638972a5">Frasco 250g Eletrocardiograma</option>
                        <option value="frasco300u" id="68349cc4a5dac4c6638972a6">Frasco 300g Ultrasom</option>
                        <option value="frasco300e" id="68349cc4a5dac4c6638972a7">Frasco 300g Eletrocardiograma</option>
                        <option value="frasco500" id="68349cc4a5dac4c6638972a8">Frasco 500g </option>
                        <option value="frasco1000" id="68349cc4a5dac4c6638972a9">Frasco 1000g </option>
                        <option value="frascou5000ubg" id="68349cc4a5dac4c6638972aa">Bag Ultrassom</option>
                        <option value="frascou5000ebg" id="68349cc4a5dac4c6638972ab">Bag Eletrocardiograma</option>
                        <option value="frascou5000uebg" id="68349cc4a5dac4c6638972ac">Bag Meios de Contato</option>
                        <option value="frascou5000b" id="68349cc4a5dac4c6638972ad">Balde</option>
                    </>
                    }

                    {itemType === "caixa" && <>
                        <option value="caixa1" id="68349cc4a5dac4c6638972ae">Caixa Frasco</option>
                        <option value="caixa2" id="68349cc4a5dac4c6638972b0">Caixa Mil</option>
                        <option value="caixa3" id="68349cc4a5dac4c6638972af">Caixa Bag</option>
                        <option value="caixa4" id="68349cc4a5dac4c6638972b1">Caixa Cem</option>
                    </>}

                    {itemType === "estiqueta" && <>
                        <option value="etqBagU" id="68349cc4a5dac4c6638972b5">Bag Ultrassom</option>
                        <option value="etqBagE" id="68349cc4a5dac4c6638972b6">Bag Eletrocardiograma</option>
                        <option value="etqBagUE" id="68349cc4a5dac4c6638972b7">Bag Meios de Contato</option>
                        <option value="etqMilU" id="68349cc4a5dac4c6638972b2">1000 Ultrassom</option>
                        <option value="etqMilE" id="68349cc4a5dac4c6638972b3">1000 Eletrocardiograma</option>
                        <option value="etqMilUE" id="68349cc4a5dac4c6638972b4">1000 Meios de Contato</option>
                        <option value="etq500U" id="68349cc4a5dac4c6638972b8">500 Ultrassom</option>
                        <option value="etq500E" id="68349cc4a5dac4c6638972b9">500 Eletrocardiograma</option>
                        <option value="etq500UE" id="68349cc4a5dac4c6638972ba">500 Meios de Contato</option>
                    </>}

                    {itemType === "tampa" && <>
                        <option value="tampaAF" id="68349cc4a5dac4c6638972bb">Tampa Abre-Fecha</option>
                        <option value="tampaBico" id="68349cc4a5dac4c6638972bc">Tampa Bico</option>
                        <option value="tampaBag" id="68349cc4a5dac4c6638972bd">Tampa Bag</option>
                        <option value="tampaPressao" id="68349cc4a5dac4c6638972be">Tampa Pressão</option>
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