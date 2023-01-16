// external imports: 
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';



// internal imports: 
import { task } from "./types"
import TodoTile from "./TodoTile"
import CustomDatePicker from './CustomDatePicker';



interface TodosProps {
    tasks: task[] | undefined,
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

    const [dateVal, setDateVal] = useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setDateVal(newValue);
    };

    return (
        <>
            <div className="todos-container">
                <Button onClick={handleOpen} className="addTaskBtn">
                    Add a Task
                    <AddIcon />
                </Button>
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
                            <CustomDatePicker dateVal={dateVal} handleChange={handleChange} />
                        </Box>
                    </Fade>
                </Modal>
                {props.tasks && props.tasks.map((taskItem, index) => (
                    <TodoTile taskName={taskItem.taskName} deadline={taskItem.deadline}></TodoTile>
                ))}
            </div>
        </>
    )
}


export default Todos;