import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

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
  const userPosts = [];

// Helper function to capture typing
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  // Helper function for button on click
  const handleClick = (event) => {
    event.preventDefault()
    API.savePost(value).then((result) => {
      console.log("testing save post result", result);
      setValue(result);
    })
    console.log("testing event data", event)
    userPosts.push(event.target.value)
    console.log("User Post Array", userPosts);

  }

  return (
    <Grid item xs={12} md={8}>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField
            id="standard-multiline-flexible"
            label="Title"
            multiline
            rowsMax={4}
            defaultValue="Title"
            onChange={handleChange}
            variant="outlined"
            />
            {/* <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            /> */}
            <TextField
            id="standard-multiline-static"
            label="Body"
            multiline
            rows={4}
            variant="outlined"
            defaultValue="Grace the Flock"
            onChange={handleChange}
            />
            <Button onClick={handleClick} variant="contained">Bleet</Button>
        </div>
        </form>
    </Grid>  
  );
}


