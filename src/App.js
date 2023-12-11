import { faCircleCheck, faEdit, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


function App() {

  const [todo, setTodo] = useState([
    { "id": 1, "title": "Task 1", "status": true },
    { "id": 3, "title": "Task 3", "status": false },
    { "id": 2, "title": "Task 2", "status": false }
  ])

  const [addTask, setAddTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  const addTaskClick = () => {
    if(addTask) {
      let num = addTask.length + 1;
      let newTaskAdded = { id: num, title: addTask, status: false }
      setTodo([...todo, newTaskAdded]);
      setAddTask('')
    }
  }

  const deleteTask = (id) => {
    let deleteTaskIcon = todo.filter((task) => task.id !== id)
    setTodo(deleteTaskIcon);
  }

  const taskComplete = (id) => {
    let completed = todo.map((task) => {
      if(task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setTodo(completed);
  }

  const handleCancelUpdate = () => {
    setUpdateTask('')
  }

  const handleChangeTask = (e) => {
    let changedTask = ({
      id: updateTask.id,
      title: e.target.value,
      status: updateTask.status ? true : false
    })
    setUpdateTask(changedTask)
  }
  
  const handleUpdateTask = () => {
    let UpdatedTask = [...todo].filter((task) => task.id !== updateTask.id);
    let newUpdatedTask = [...UpdatedTask, updateTask]
    setTodo(newUpdatedTask);
    setUpdateTask('')

  }

  return (
    <div className="bg-gray-200 h-full">
      <div className="container mx-auto p-6 absolute">
        <div className="p-6 bg-sky-800 rounded-lg max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold text-center text-white mb-4">To do list</h1>

          {updateTask && updateTask ? 
            (
              <>
                {/* Update task */}
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
              </>
            )
            :
            (
              <>
                {/* Add task */}
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

          {/* Tasks go here */}
          <div className="overflow-y-auto" style={{ height: '60vh' }}>
            <div className="text-white text-base">
              {todo && todo
              .sort((a,b) => a.id > b.id ? 1 : -1)
              .map((list, index) => 
                <div className="border border-gray-200 rounded px-2 py-1 mb-2 flex gap-2 justify-between" key={list.id}>
                  <p className={`m-0 ${list.status ? 'line-through text-gray-400' : ''}`}>
                    <span className="px-1.5 py-0.5 text-xs rounded-full border border-gray-400 inline-block">{index + 1}</span> {list.title}
                  </p>
                  <div className="flex gap-2">
                    <span
                      className="cursor-pointer"
                      title="Completed"
                      onClick={() => taskComplete(list.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck}  />
                    </span>
                    {list.status ? false : (
                      <span
                        className="cursor-pointer"
                        title="Edit"
                        onClick={() => setUpdateTask({
                          id: list.id,
                          title: list.title,
                          status: list.status ? true : false
                        })}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </span>
                    )}
                    <span
                      className="cursor-pointer"
                      title="Delete"
                      onClick={() => deleteTask(list.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
