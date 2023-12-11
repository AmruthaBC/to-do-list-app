

const UpdateTask = ({updateTask, handleChangeTask, handleUpdateTask, handleCancelUpdate}) => {
  return(
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={updateTask && updateTask.title}
        onChange={(e) => handleChangeTask(e)}
        className="px-2 text-sm rounded w-full flex-1"
        style={{ outline: 'none' }}
      />
      <button className="px-5 py-1 text-sm font-semibold bg-emerald-200 rounded" onClick={handleUpdateTask}>Update</button>
      <button className="px-5 py-1 text-sm font-semibold bg-amber-200 rounded" onClick={handleCancelUpdate}>Cancel</button>
    </div>
  )
}

export default UpdateTask;