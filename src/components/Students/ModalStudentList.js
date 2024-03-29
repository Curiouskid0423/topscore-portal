import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ModalStudentList = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleModalChange = () => setOpen(!open);

    return (
        <div>
            <button type="button" onClick={handleModalChange}>
                Modal List
            </button>

        </div>
    )
}

export default ModalStudentList;