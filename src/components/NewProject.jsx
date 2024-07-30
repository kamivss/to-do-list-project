import { useRef } from "react";
import Input from "./Input";
import Modal from './Modal.jsx';

export default function NewProject({ onAdd , onCancel}) {
    const modal = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dataRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredData = dataRef.current.value;

        console.log('Entered Date:', enteredData);

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredData.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            data: enteredData
        });
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className='text-xl font-bold text-stone-700 mt-4 my-4'> Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Ooops... você se esqueceu de preencher os campos.</p>
                <p className='text-stone-600 mb-4'>Por favor certifique-se de fornecer um valor válido.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancelar</button>
                    </li>
                    <li>
                        <button onClick={handleSave}
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Salvar</button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={titleRef} label="Título" />
                    <Input ref={descriptionRef} label="Descrição" textArea />
                    <Input type='date' ref={dataRef} label="Data" />
                </div>
            </div>
        </>
    );
}
