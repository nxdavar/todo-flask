import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface TodoTileProps {
    taskName: string,
    deadline: Date
}


const TodoTile: React.FC<TodoTileProps> = (props: TodoTileProps) => {
    return (
        <div className="todoTile">
            <div className="completeIcon">
                <RadioButtonUncheckedIcon />
            </div>
            <div className="todoTile--text">
                <h4>{props.taskName}</h4>
                <p>{`${props.deadline}`}</p>
            </div>
        </div>
    )
}

export default TodoTile;