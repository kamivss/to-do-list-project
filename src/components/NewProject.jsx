import { useRef } from "react";
import Input from "./Input";

export default function  NewProject({onAdd}){
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dataRef = useRef();

    function handleSave(){
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredData = dataRef.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            data: enteredData
        });
    }

    return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancelar</button>
            </li>
            <li>
                <button onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Salvar</button>
            </li>
        </menu>
       <div>
            <Input type='text' ref={titleRef} label="Titulo"/>
            <Input ref={descriptionRef} label="Descrição" textArea />
            <Input type='date' ref={dataRef} label="Data"/>
       </div>
    </div>
    )
}