import React, {useState} from "react";
import { useItems } from "../context/ItemListContext";

const AddList = () => {

    const { addItem } = useItems();
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100");
    const [itemType, setItemType] = useState("frasco");


    return (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            <div className="col-span-1">
                <label className="block"> Tipo de Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => setItemType(e.target.value)}>
                    <option value="frasco">Frasco </option>
                    <option value="caixa">Caixa</option>
                    <option value="estiqueta">Etiqueta</option>
                </select>
            </div>

            <div className="col-span-2">
                <label className="block"> Item </label>
                <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => setItem(e.target.value)}>

                    {itemType === "frasco" && <>
                        <option value="frasco100">Frasco 100g</option>
                        <option value="frasco250">Frasco 250g</option>
                        <option value="frasco500">Frasco 500g</option>
                    </>
                    }

                    {itemType === "caixa" && <>
                        <option value="caixa1">Caixa Frasco</option>
                        <option value="caixa2">Caixa Mil</option>
                        <option value="caixa3">Caixa Bag</option>

                    </>}

                    {itemType === "estiqueta" && <>
                        <option value="etqBagU">Bag Ultrassom</option>
                        <option value="etqBagE">Bag Eletrocardiograma</option>
                        <option value="etqBagUE">Bag Meios de Contato</option>
                        <option value="etqMilU">1000 Ultrassom</option>
                        <option value="etqMilE">1000 Eletrocardiograma</option>
                        <option value="etqMilUE">1000 Meios de Contato</option>
                        <option value="etq500U">500 Ultrassom</option>
                        <option value="etq500E">500 Eletrocardiograma</option>
                        <option value="etq500UE">500 Meios de Contato</option>
                    </>}

                </select>
            </div>

            <div className="col-span-1">
                <label className="block"> Quantidade </label>
                <input type="number" min="1" className="w-full border border-gray-300 rounded p-2 text-black" placeholder="ex: 5" onChange={(e) => setQtd(e.target.value)} />
            </div>

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold col-span-2" onClick={() => addItem({ itemType, item, qtd })}>
                Adicionar à Lista
            </button>
        </div>
    )
}

export default AddList;