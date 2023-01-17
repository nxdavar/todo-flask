// external imports:
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import axios from "axios";

interface TodoTileProps {
    taskName: string,
    deadline: Date,
    getData(): void,
}


const TodoTile: React.FC<TodoTileProps> = (props: TodoTileProps) => {

    /**
  * Sends POST request to backend
  * to put task in database
  */
    function deleteTodo(newTaskName: string | undefined, newTaskDeadline: Date | undefined) {
        axios.post('/deleteTodo', {
            taskName: newTaskName,
            deadline: newTaskDeadline
        })
            .then(function (response) {
                console.log(response);
                props.getData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return (
        <div className="todoTile">
            <RadioButtonUncheckedIcon className="completeIcon" onClick={() => deleteTodo(props.taskName, props.deadline)} />
            <div className="todoTile--text">
                <h4>{props.taskName}</h4>
                <p>{`${props.deadline}`}</p>
            </div>
        </div>
    )
}

export default TodoTile;