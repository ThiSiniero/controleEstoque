import React, {useState} from "react";

const AddItemPage = () => {
    const [itemList, setItemList] = useState([]);
    const [qtd, setQtd] = useState("");
    const [item, setItem] = useState("frasco100");
    const [itemType, setItemType] = useState("frasco");

    const addItem = () => {
        if (qtd === "") {
            alert("Preencha a quantidade!");
            return
        }
        setItemList([...itemList, { id: itemList.length + 1, type: itemType, name: item, quantity: qtd }]);    

    };

    const rmItem = (id) => {
        const newList = itemList.filter((item) => item.id !== parseInt(id));
        setItemList(newList);
    }

    return (
        <div className="bg-gray-400 min-h-screen">
            <h1 className="text-4xl text-center mb-8 pt-8 font-semibold">Remover Estoque</h1>
            
            <div className="w-[50%] mx-auto border border-gray-300 rounded py-14 px-10 bg-gray-800 text-white rounded-3xl">
                
                <div className="grid grid-cols-6 gap-4 items-end">
                    <div className="col-span-1">
                        <label className="block"> Tipo de Item </label>
                        <select className="w-full border border-gray-300 rounded p-2 text-black" onChange={(e) => setItemType(e.target.value)}>
                            <option value="frasco">Frasco </option>
                            <option value="caixa">Caixa</option>
                            <option value="tampa">Tampa</option>
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
                            
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block"> Quantidade </label>
                        <input type="number" min="1" className="w-full border border-gray-300 rounded p-2 text-black" placeholder="ex: 5" onChange={(e) => setQtd(e.target.value)}/>
                    </div>

                    <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white rounded p-2 font-semibold col-span-2" onClick={() => addItem()}>
                        Adicionar à Lista
                    </button>

                </div>
                
                <h2 className="pt-14 text-xl text-center font-semibold">Lista de items a serem removidos:</h2>

                <div className="grid grid-cols-4 items-center border-b pb-1 mb-4 pt-16 text-lg font-semibold">
                    <p>Tipo</p>
                    <p>Item</p>
                    <p>Quantidade</p>
                    <p className="text-end">Cancelar</p>
                </div>       

                <div>

                    {itemList.length >= 1 && itemList.map(item => (
                        <div key={item.id} className="grid grid-cols-4 items-center border-b py-1 text-lg">
                            <span>{item.type}</span>
                            <span>{item.name}</span>
                            <span>{item.quantity} unidades</span>
                            <button className="text-sm text-red-500 hover:text-red-200 pl-14 text-end" onClick={() => rmItem(item.id)}>Remover</button>
                        </div>
                    ))}

                    {itemList.length >= 1 ? <div className="flex justify-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white rounded p-4 font-semibold mt-8" onClick={() => alert(itemList.map(item => item.name + " - " + item.quantity))}>
                            Remover do Estoque
                        </button>
                    </div> : null}
                    

                    {itemList.length === 0 && (
                        <p className="text-center text-gray-300 pt-20"> Nenhum item a ser removido.</p>
                    )}

                </div>
            </div>


        </div>
    );
};

export default AddItemPage;