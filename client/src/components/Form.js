import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid item xs={12} md={8}>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            />
            <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            />
            <TextField
            id="standard-multiline-static"
            label="Body"
            multiline
            rows={4}
            defaultValue="Grace the Flock"
            />
        </div>
        </form>
    </Grid>  
  );
}


