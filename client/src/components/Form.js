import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
      paddingTop: "20px",
    }
  },
  what: {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    marginLeft: theme.spacing(3),
  },
  form: {
    marginBottom: theme.spacing(3),
  }
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid className={classes.form} item xs={6} md={8}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
                <TextField
                id="standard-multiline-flexible"
                label="Title"
                multiline
                rowsMax={4}
                defaultValue="Title"
                onChange={handleChange}
                variant="outlined"
                />
                <TextField
                id="standard-multiline-static"
                label="Body"
                multiline
                rows={4}
                variant="outlined"
                defaultValue="Grace the Flock"
                /> 
                <Button className={classes.what} variant="contained">Bleet</Button>
            </Grid>
            
          </div>
        </form>
    </Grid>  
  );
}


