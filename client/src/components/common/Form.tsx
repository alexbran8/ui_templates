import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import {useForm} from 'react-hook-form';

import regeneratorRuntime from "regenerator-runtime";


import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { InputAdornment } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import ListIcon from '@material-ui/icons/List';
import FlagIcon from '@material-ui/icons/Flag';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LanguageIcon from '@material-ui/icons/Language';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { useFormControls } from './Create';
import { composeInitialProps } from 'react-i18next';

// import { FormControl } from '@mui/material';
// import Input from '@mui/material/Input';



const projectTypes = [
  {
    value: 'T2',
    label: 'Summer Practice',
  },
  {
    value: 'T1',
    label: 'Individual Project',
  },
  {
    value: 'T3',
    label: 'Team Project',
  },
  {
    value: 'T4',
    label: 'Single Day Event',
  },
];


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',



      },
    },
    primaryColor: {
      color: 'rgb(169,169,169)',
    },
    secondaryColor: {
      color: 'blue'
    },
    label: {
      backgroundColor: 'rgb(169,169,169)',
      width: 'auto',
      height: '56px',
      border: '1px groove black',
      display: 'flex',
      alignItems: 'center',
    },
    right: {
      float: 'right',
      display: 'flex',
      flexDirection: 'column',
      marginRight: '150px',
    },
  }),
);


type Profile = {
  appel: string
  data: string
  data2: string
  abran: string
  target: string
  ericson: string
  ttType: string
  flag: string
  upalu: string
  language: string
  si: string
  problematique: string
  tt: string
  itv: string
  onSait: string
  norm: string
  mainCause: string
  action: string
  ttCreator: string
  technician: string
  collage: string
  time: string
  sousCause: string
  corectiveAction: string
  processStatus: string
  inverted: string
  bagot: string
  active: string
}


export default function FormPropsTextFields(props: any) {
  const classes = useStyles();


  { console.log({ props }) }

  // const {register, handleSubmit} = useForm<Profile>()

  // const [state, setState] = useState({
  //   appel: '',
  //   data: '',
  //   abran: '',
  //   target: '',
  //   ericson: '',
  //   ttType: '',
  //   flag: '',
  //   upalu: '',
  //   language: '',
  //   si: '',
  //   problematique: '',
  //   tt: '',
  //   itv: '',
  //   onSaint: '',
  //   norm: '',
  //   mainCause: '',
  //   action: '',
  //   ttCreator: '',
  //   technician: '',
  //   collage: '',
  //   time: '',
  //   sousCause: '',
  //   corectiveAction: '',
  //   bagot: '',
  //   active: '',

  // });

  //   const changeState = (e:any) => {
  //     setForms({
  //       ...forms,
  //       appel: e.target.values,
  //       data: e.target.values,
  //       abran: e.target.values,
  //       target: e.target.values,
  //       ericson: e.target.values,
  //       ttType: e.target.values,
  //       flag: e.target.values,
  //       upalu: e.target.values,
  //       language: e.target.values,
  //       si: e.values,
  //       problematique: e.target.values,
  //       tt: e.target.values,
  //       itv: e.target.values,
  //       onSaint: e.target.values,
  //       norm: e.target.values,
  //       mainCause: e.target.values,
  //       action: e.target.values,
  //       ttCreator: e.target.values,
  //       technician: e.target.values,
  //       collage: e.target.values,
  //       time: e.target.values,
  //       sousCause: e.target.values,
  //       corectiveAction: e.target.values,
  //       bagot: e.target.values,
  //       active: e.target.values,

  //     })
  //   }

  // React.useEffect(() => {
  //   const json = localStorage.getItem("form");
  //   const loadedForm = JSON.parse(json);
  //   if (loadedForm) {
  //     setForms(loadedForm);
  //   }
  // }, []);


  // function deleteForm(id) {
  //   let updatedforms = [...forms].filter((forms) => form.id !== id);
  //   setForms(updatedForms);
  // }

  const {
    handleInputValue,
    handleFormSubmit,
    // formIsValid,
    errors
  } = useFormControls();

  //const [forms, setForms] = useState<Profile>()


  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setForms({ ...forms, [name]: value });
  // };

console.log(props)

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container direction="row" className={classes.mainHeader}>
          <Grid item xs={8}>
            <Typography className={classes.primaryColor} >
              Main Info
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          style={{ marginTop: 20, width:350 }}
          id="standard-basic"
          variant="outlined"
          
          // {...register("title")}
          defaultValue={props.operation === 'edit' ? props.values.title : null}
          onBlur={(e) => {props.handleInputValues(e.target.value, 'title', props.operation === 'edit' ? props.values.id : 0) }}
          onChange={(e) => {props.handleInputValues(e.target.value, 'title', props.operation === 'edit' ? props.values.id : 0) }}
          {...(errors["title"] && { error: true, helperText: errors["title"] })}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       {/* <div className={classes.label}> */}
          //       <label>Project title</label>
          //       {/* </div> */}
          //     </InputAdornment>
          //   )
          // }}
        />
        <TextField
          id="standard-select-currency"
          style={{ marginTop: 20, marginLeft: 20 }}
          select
          variant="outlined"
          defaultValue={props.operation === 'edit' ? props.values.type : null}
          // {...register("type")}
          onChange={(e) => { props.handleInputValues(e.target.value, 'type',props.operation === 'edit' ? props.values.id : 0) }}
          onBlur={(e) => { props.handleInputValues(e.target.value, 'type', props.operation === 'edit' ? props.values.id : 0) }}
          {...(errors["type"] && { error: true, helperText: errors["type"] })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <label>Project type</label>
              </InputAdornment>
            )
          }}
        >
          {projectTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency"
          select
          style={{ marginTop: 20, marginLeft: 20 }}
          variant="outlined"
          defaultValue={props.operation === 'edit' ? props.values.coordinator : null}
          // {...register("flag")}
          onChange={(e) => { props.handleInputValues(e.target.value, 'coordinator',props.operation === 'edit' ? props.values.id : 0) }}
          onBlur={(e) => { props.handleInputValues(e.target.value, 'coordinator', props.operation === 'edit' ? props.values.id : 0) }}
          {...(errors["coordinator"] && { error: true, helperText: errors["coordinator"] })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <label>Project Coordinator</label>
              </InputAdornment>
            )
          }}
        >
          {projectTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider
        style={{ marginTop: 20 }}
         />
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" className={classes.mainHeader}>
          <Grid item xs={12}>
            <Typography className={classes.primaryColor} >
              Details
            </Typography>
          </Grid>
        </Grid>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          style={{ marginTop: 20 }}
          defaultValue={props.operation === 'edit' ? props.values.description : null}
          multiline
          rows={14}
          variant="outlined"
          onChange={(e) => { props.handleInputValues(e.target.value, 'description',props.operation === 'edit' ? props.values.id : 0) }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <div className={classes.label}> */}

                {/* <ChatBubbleOutlineIcon /> */}
                {/* </div> */}

              </InputAdornment>
            )
          }}
        />
                 <Grid item xs={12}>
        <Divider
        style={{ marginTop: 20 }}
         />
      </Grid>
        <TextField
          id="outlined-multiline-static"
          style={{ marginTop: 20 }}
          label="Requirements"
          defaultValue={props.operation === 'edit' ? props.values.requirements : null}
          multiline
          rows={14}
          variant="outlined"
          onChange={(e) => { props.handleInputValues(e.target.value, 'requirements',  props.operation === 'edit' ? props.values.id : 0) }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {/* <div className={classes.label}> */}

                {/* <ChatBubbleOutlineIcon /> */}
                {/* </div> */}

              </InputAdornment>
            )
          }}
        />
         <Grid item xs={12}>
        <Divider
        style={{ marginTop: 20 }}
         />
      </Grid>
        <Grid item xs={8}>
          <button type="submit" onClick={() =>{props.saveFunction()}}>Save</button>

        </Grid>
      </Grid>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >















        <div></div>
        {/* { disabled={!formIsValid()} */}
      </form>
    </Grid>
  );
}
