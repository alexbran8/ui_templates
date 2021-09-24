import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import FormPropsTextFields from "./Form";

import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 40;
  const left = 40;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 1500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        float: 'right',
        backgroundcolor: 'red',
    },
  }),
);

export default function SimpleModal(props:any) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>Create Item</div>
     <button className={classes.button} type="button" onClick={handleClose}>
        <CloseIcon />
        Close
      </button>

      <button 
      className={classes.button} 
      type="button"
      >
        <DoneIcon />
        Create
      </button>
     {/* <FormPropsTextFields /> */}
     
    </div>
  );
  console.log(props);
  return (
    <div>
      
      <button  type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    
  );
}