import { useState } from "react";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";
import ToDoList from "./components/TodoList";


function App() {

  const [todo, setTodo] = useState([
  ])

  const [addTask, setAddTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');

  const addTaskClick = () => {
    if(addTask) {
      let num = todo.length + 1;
      console.log(addTask.length);
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
                <UpdateTask
                  updateTask={updateTask}
                  handleChangeTask={handleChangeTask}
                  handleUpdateTask={handleUpdateTask}
                  handleCancelUpdate={handleCancelUpdate}
                />
              </>
            )
            :
            (
              <>
                {/* Add task */}
                <AddTask 
                  addTask={addTask}
                  setAddTask={setAddTask}
                  addTaskClick={addTaskClick}
                />
              </>
            )
          }

          {/* Tasks go here */}
          {todo && todo.length ? '' : 'No Tasks...'}

          <ToDoList
            todo={todo}
            taskComplete={taskComplete}
            setUpdateTask={setUpdateTask}
            deleteTask={deleteTask}
          />


        </div>
      </div>
    </div>
  );
}

export default App;
