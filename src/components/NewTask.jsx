import React, {  useState } from 'react'

const NewTask = ( { onAdd }) => {

    const [enteredTask,setEntedTask] = useState('');

    function handleChange(event){
        setEntedTask(event.target.value)
    }

    function handleClick (){
       if(enteredTask.trim() === ''){
        return;
       }
        onAdd(enteredTask);
        setEntedTask('');

    }

  return (
    <div className='flex items-center gap-4'>
      <input 
      type='text'
       className='w-64 py-1 px-2 rounded-sm bg-stone-200'
       onChange={handleChange}
       value={enteredTask}
       />
      <button 
      className='text-stone-400 hover:text-stone-950'
      onClick={handleClick}> Nova tarefa</button>
    </div>
  )
}

export default NewTask
