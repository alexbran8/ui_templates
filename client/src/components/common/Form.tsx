import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//import {useForm} from 'react-hook-form';

import regeneratorRuntime from "regenerator-runtime";


import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { InputAdornment } from '@material-ui/core';
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


export default function FormPropsTextFields(values: any) {
  const classes = useStyles();


  {console.log({values})}

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



  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >




      <TextField
        required
        id="standard-basic"
        variant="outlined"
        // {...register("tt")}
        value={values.values.title}
        onBlur={(e) => { handleInputValue(e, 'title') }}
        onChange={(e) => { handleInputValue(e, 'title') }}
        {...(errors["title"] && { error: true, helperText: errors["title"] })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <div className={classes.label}> */}
                <label>Project title</label>
              {/* </div> */}
            </InputAdornment>
          )
        }}
      />
            <TextField
        id="standard-select-currency"
        select
        variant="outlined"
        value={values.values.type}
        // {...register("type")}
        onChange={(e) => { handleInputValue(e, 'type') }}
        onBlur={(e) => { handleInputValue(e, 'type') }}
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
        variant="outlined"
        value={values.values.coordinator}
        // {...register("flag")}
        onChange={(e) => { handleInputValue(e, 'flag') }}
        onBlur={(e) => { handleInputValue(e, 'flag') }}
        {...(errors["flag"] && { error: true, helperText: errors["flag"] })}
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
           <TextField
          id="outlined-multiline-static"
          label="Description"
          value={values.values.description}
          multiline
          rows={14}
          variant="outlined"
          onChange={(e) => { handleInputValue(e, 'description') }}
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
                 <TextField
          id="outlined-multiline-static"
          label="Description"
          value={values.values.requirements}
          multiline
          rows={14}
          variant="outlined"
          onChange={(e) => { handleInputValue(e, 'description') }}
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

  




      <button type="submit" value="submit">Save</button>
      {/* { disabled={!formIsValid()} */}
    </form>
  );
}
