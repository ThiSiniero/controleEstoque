import React, { useState } from "react";
import { useItems } from "../context/ItemListContext";

const AddList = () => {

    const { addItem } = useItems();
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100u");
    const [itemType, setItemType] = useState("frasco");
    const [number, setNumber] = useState("683486fab166b69fb791b25d");

    const handleItemChange = (e) => {
        const newType = e.target.value;
        setItemType(newType);

        // Resetar item e número com os primeiros valores válidos do novo tipo
        if (newType === "frasco") {
            setItem("frasco100u");
            setNumber("683486fab166b69fb791b25d");
        } else if (newType === "caixa") {
            setItem("caixa1");
            setNumber("683486fab166b69fb791b269");
        } else if (newType === "estiqueta") {
            setItem("etqBagU");
            setNumber("683486fab166b69fb791b26d");
        } else if (newType === "tampa") {
            setItem("tampa1");
            setNumber("683486fab166b69fb791b276");
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
                        <option value="frasco100u" id="683486fab166b69fb791b25d">Frasco 100g Ultrasom</option>
                        <option value="frasco100e" id="683486fab166b69fb791b25e">Frasco 100g Eletrocardiograma</option>
                        <option value="frasco250u" id="683486fab166b69fb791b25f">Frasco 250g Ultrasom</option>
                        <option value="frasco250e" id="683486fab166b69fb791b260">Frasco 250g Eletrocardiograma</option>
                        <option value="frasco300u" id="683486fab166b69fb791b261">Frasco 300g Ultrasom</option>
                        <option value="frasco300e" id="683486fab166b69fb791b262">Frasco 300g Eletrocardiograma</option>
                        <option value="frasco500" id="683486fab166b69fb791b263">Frasco 500g </option>
                        <option value="frasco1000" id="683486fab166b69fb791b264">Frasco 1000g </option>
                        <option value="frascou5000ubg" id="683486fab166b69fb791b265">Frasco Bag Ultrassom</option>
                        <option value="frascou5000ebg" id="683486fab166b69fb791b266">Frasco Bag Eletrocardiograma</option>
                        <option value="frascou5000uebg" id="683486fab166b69fb791b267">Frasco Bag Meios de Contato</option>
                        <option value="frascou5000b" id="683486fab166b69fb791b268">Frasco Balde</option>
                    </>
                    }

                    {itemType === "caixa" && <>
                        <option value="caixa1" id="683486fab166b69fb791b269">Caixa Frasco</option>
                        <option value="caixa2" id="683486fab166b69fb791b26a">Caixa Mil</option>
                        <option value="caixa3" id="683486fab166b69fb791b26b">Caixa Bag</option>
                        <option value="caixa4" id="683486fab166b69fb791b26c">Caixa Cem</option>
                    </>}

                    {itemType === "estiqueta" && <>
                        <option value="etqBagU" id="683486fab166b69fb791b26d">Bag Ultrassom</option>
                        <option value="etqBagE" id="683486fab166b69fb791b26e">Bag Eletrocardiograma</option>
                        <option value="etqBagUE" id="683486fab166b69fb791b26f">Bag Meios de Contato</option>
                        <option value="etqMilU" id="683486fab166b69fb791b270">1000 Ultrassom</option>
                        <option value="etqMilE" id="683486fab166b69fb791b271">1000 Eletrocardiograma</option>
                        <option value="etqMilUE" id="683486fab166b69fb791b272">1000 Meios de Contato</option>
                        <option value="etq500U" id="683486fab166b69fb791b273">500 Ultrassom</option>
                        <option value="etq500E" id="683486fab166b69fb791b274">500 Eletrocardiograma</option>
                        <option value="etq500UE" id="683486fab166b69fb791b275">500 Meios de Contato</option>
                    </>}

                    {itemType === "tampa" && <>
                        <option value="tampaAF" id="683486fab166b69fb791b276">Tampa Abre-Fecha</option>
                        <option value="tampaBico" id="683486fab166b69fb791b277">Tampa Bico</option>
                        <option value="tampaBag" id="683486fab166b69fb791b278">Tampa Bag</option>
                        <option value="tampaPressao" id="683486fab166b69fb791b279">Tampa Pressão</option>
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