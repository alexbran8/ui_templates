import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
// import FormPropsTextFields from "./Form";

import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';


function getModalStyle() {
  return {
    width: '100%',
    maxWidth: '100vw',
    maxHeight: '100%',
    position: 'fixed',
    top: '50%',
    left:  '0%',
    transform: 'translate(0, -50%)',
    overflowY: 'auto'
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

export default function GenericModal(props:any) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

//  pass to child to close form
  const handleClose = () => {
    props.handleModal
  };

  // pass to child to get values

console.log(props)
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div><b>{props.title}</b></div>TEST
      
     <button className={classes.button} type="button" onClick={props.handleModal}>
        <CloseIcon />
      </button>

    </div>
  );

  return (
    <div>
      <Modal
       style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        // setShowModalOpen={open}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       
        <div>TEST {body}</div>
      </Modal>
    </div>
    
  );
}