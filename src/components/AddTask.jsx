

const AddTask = ({addTask, setAddTask, addTaskClick}) => {
  return(
    <>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={addTask}
          onChange={ (e) => setAddTask(e.target.value) }
          className="px-2 text-sm rounded w-full flex-1" 
          style={{ outline: 'none' }}
        />
        <button className="px-4 py-1 text-sm font-semibold bg-emerald-200 rounded" onClick={addTaskClick}>Add task</button>
      </div>
    </>
  )
}

export default AddTask;