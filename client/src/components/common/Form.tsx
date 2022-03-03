import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form'

import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { InputAdornment } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";


import { useFormControls } from './Create';

import "./Form.scss"

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

const projectTypes2 = ['Summer Practice', 'Individual Project', 'Team Project', 'Single Day Event']

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
  const { register, handleSubmit, control } = useForm({});


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

  console.log(props)

  const onSubmit = (data: any) => { console.log({ props }); props.saveFunction(data) }

  return (
    <Grid container>
      <div className="add-from">
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid item xs={12}>
            <Typography className={classes.primaryColor} >
              Main Info
            </Typography>
            <Divider
              style={{ marginTop: 20 }}
            />
            <Grid container direction="row" className={classes.mainHeader}>
              <Controller
                name="id"
                control={control}

                defaultValue={props.operation === 'edit' ? props.values.id : null}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="id"
                    type="text"
                    label="Project id"
                    className={classes.textField}
                    onChange={onChange}
                    disabled={true}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('id')}
                  />
                )}
              // rules={{ required: 'Project ID is required' }}
              />
              <Controller
                name="title"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="title"
                    type="text"
                    label="Project title"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.title : null}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('title')}
                  />
                )}
                rules={{ required: 'Project Title is required' }}
              />
              <Controller
                control={control}
                name="type"
                defaultValue={props.operation === 'edit' ? props.values.type : null}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <Autocomplete
                    value={value}
                    onChange={(event, item) => {
                      onChange(item);
                    }}
                    id="type"
                    options={projectTypes2}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label="type"
                      />
                    )}
                  />
                )}
                rules={{ required: 'Project type is required' }}
              />
              <Controller
                name="subject"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="subject"
                    type="text"
                    label="Project subject"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.subject : null}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('subject')}
                  />
                )}
                rules={{ required: 'Project subject is required' }}
              />
              <Controller
                name="team_size"
                control={control}

                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="team_size"
                    type="number"
                    label="Team Size"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.team_size : null}
                    onChange={onChange}
                    disabled={false}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('team_size')}
                  />
                )}
                rules={{ required: 'Team Size is required' }}
              />
              <Controller
                name="coordinator"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="coordinator"
                    type="text"
                    label="Project coordinator"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.coordinator : null}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('coordinator')}
                  />
                )}
                rules={{ required: 'Project coordinator is required' }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.mainHeader}>
            <Grid item xs={12}>
              <Typography className={classes.primaryColor} >
                Details
              </Typography>
              <Divider
                style={{ marginTop: 20 }}
              />
              <Controller
                name="description"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="description"
                    type="text"
                    label="Project description"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.description : null}
                    onChange={onChange}
                    multiline
                    rows={14}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('description')}
                  />
                )}
                rules={{ required: 'Project description is required' }}
              />
              <Controller
                name="requirements"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="requirements"
                    type="text"
                    label="Project requirements"
                    defaultValue={props.operation === 'edit' ? props.values.requirements : null}
                    className={classes.textField}
                    onChange={onChange}
                    multiline
                    rows={14}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('requirements')}
                  />
                )}
                rules={{ required: 'Project requirements are required' }}

              />
              <Controller
                name="tasks"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="description"
                    type="text"
                    label="Project Tasks"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.tasks : null}
                    onChange={onChange}
                    multiline
                    rows={14}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('tasks')}
                  />
                )}
                rules={{ required: 'Project tasks is required' }}
              />
              <Controller
                name="constraints"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="constraints"
                    type="text"
                    label="Project Constraints"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.constraints : null}
                    onChange={onChange}
                    multiline
                    rows={14}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('constraints')}
                  />
                )}
                rules={{ required: 'Project constraints is required' }}
              />
              <Controller
                name="training"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    id="training"
                    type="text"
                    label="Project Training"
                    className={classes.textField}
                    defaultValue={props.operation === 'edit' ? props.values.training : null}
                    onChange={onChange}
                    multiline
                    rows={14}
                    error={!!error}
                    helperText={error ? error.message : null}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register('training')}
                  />
                )}
                rules={{ required: 'Project training is required' }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>

        </form>
      </div>
    </Grid>
  );
}
