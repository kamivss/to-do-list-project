import ImageProject from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected({onStartAdd}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={ImageProject} alt='image' className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Nenhum projeto adicionado.</h2>
            <p className='text-stone-400 mb-4'>Adicione um projeto para começar um novo</p>
            <p className='mt-8'>
                <Button onClick={onStartAdd} button='Novo Projeto'/>
            </p>
        </div>
    )
}