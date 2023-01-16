
// internal imports: 
import { task } from "./types"
import TodoTile from "./TodoTile"

interface TodosProps {
    tasks: task[] | undefined,
}


const Todos: React.FC<TodosProps> = (props: TodosProps) => {
    return (
        <div className="todos-container">
            {props.tasks && props.tasks.map((taskItem, index) => (

                <TodoTile taskName={taskItem.taskName} deadline={taskItem.deadline}></TodoTile>
            ))}
        </div>
    )
}


export default Todos;