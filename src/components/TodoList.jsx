import { faCircleCheck, faEdit, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ToDoList = ({todo, taskComplete, setUpdateTask, deleteTask}) => {
  return (
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
  )
}

export default ToDoList;