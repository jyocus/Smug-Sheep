import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import VirtualizedList from './List';
import API from '../utils/API';

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
  const [blog, setBlog] = React.useState({
    title: "",
    body: ""
  });
  const userPosts = [];

// Helper function to capture typing
  const handleChange = (event) => {
    const {name, value} = event.target
    console.log(name, value)
    setBlog({...blog, [name]: value});
    //console.log(event.target.name)
    //console.log(event.target.value);
  };

  // const inputProps = {
  //   fullWidth: true,
  // };
  // Helper function for button on click
  const handleClick = (event) => {
    console.log(blog)
    event.preventDefault()
    API.savePost(blog).then((result) => {
      console.log("testing save post result", result);
      //setValue(result);
    })
    //console.log("testing event data", event)
    //userPosts.push(event.target.value)
    //console.log("User Post Array", userPosts);

  }

  return (
   <Grid className={classes.form} item xs={6} md={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
         <Grid container spacing={3} >
            <Grid
            item xs={12} sm={6}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
                <TextField
                id="standard-multiline-flexible"
                label="Title"
                placeholder="i.e. Friendly Neighbor"
                multiline
                name="title"
                value={blog.title}
                rowsMax={4}
                // defaultValue="Title"
                onChange={handleChange}
                variant="outlined"
                style = {{width: 400}}
                />
                <TextField
                id="standard-multiline-static"
                label="Body"
                placeholder="Before the storm started my neighbor brought in my favorite plants. Thank you!"
                multiline
                onChange={handleChange}
                value={blog.body}
                name="body"
                rows={4}
                variant="outlined"
                // defaultValue="Share your good news!"
                // fullWidth="true"
                style = {{width: 400}}
                /> 
                <Button onClick={handleClick} className={classes.what} variant="contained">Bleet</Button>   
            </Grid>

            <Grid
            container
            item xs={12} sm={6}
            direction="column"
            justify="center"
            alignItems="center">
              <VirtualizedList />
            </Grid>

            {/* <Grid 
            container
            direction="column"
            justify="center"
            alignItems="flex-end">
               <VirtualizedList />
            </Grid> */}
           </Grid>
          </div>
        </form>
    </Grid>  
  );
}


