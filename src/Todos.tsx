// external imports: 
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import axios from 'axios';



// internal imports: 
import { task } from "./types"
import TodoTile from "./TodoTile"
import CustomDatePicker from './CustomDatePicker';



interface TodosProps {
    tasks: task[] | undefined,
    getData(): void
}

const BoxStyle = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Todos: React.FC<TodosProps> = (props: TodosProps) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [newTaskDeadline, setNewTaskDeadline] = useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const [newTask, setNewTask] = useState('');

    const handleChange = (newValue: Dayjs | null) => {
        setNewTaskDeadline(newValue);
    };


    /**
     * Sends POST request to backend
     * to put task in database
     */
    function addNewTodo() {
        axios.post('/addTodo', {
            taskName: newTask,
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


    /**
  * Sends POST request to backend
  * to delete all todos 
  */
    function resetTodos() {
        axios.post('/resetTodos', {
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
        <>
            <div className="todos-container">
                <div className="todos-container-btnRow">
                    <Button onClick={handleOpen} className="addTaskBtn">
                        Add a Todo
                        <AddIcon />
                    </Button>
                    <Button onClick={resetTodos} className="resetBtn">
                        Reset Todos
                    </Button>
                </div>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={BoxStyle}>
                            <div className='modal--titleRow'>
                                <h2>Add a Todo</h2>
                                <CloseIcon className="modal--closeIcon" onClick={handleClose}></CloseIcon>
                            </div>
                            <TextField
                                className="todo--input"
                                required
                                id="standard-required"
                                label="Enter your todo's name"
                                defaultValue=""
                                variant="standard"
                                value={newTask}
                                onChange={(event) => setNewTask(event.target.value)}
                            />
                            <CustomDatePicker dateVal={newTaskDeadline} handleChange={handleChange} />
                            <div className="submitBtnCont">
                                <Button className="submitBtn" onClick={addNewTodo}>Add Todo</Button>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
                {(props.tasks && props.tasks.length !== 0) ? (
                    props.tasks.map((taskItem, index) => (
                        <TodoTile taskName={taskItem.taskName} deadline={taskItem.deadline} getData={props.getData}></TodoTile>
                    ))
                ) :
                    (
                        <p className='noTasksTxt'>You currently have no todos. Click the add task button on the top right to add your first todo.</p>
                    )}
            </div>
        </>
    )
}


export default Todos;