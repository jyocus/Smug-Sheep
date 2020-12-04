import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import VirtualizedList from './List';
import API from '../utils/API';
import Profile from './Profile'; 
import Bleetify from "bleetify";

//Bleetify!
const btnText = "Bleet";
const bleet = Bleetify.bleet(btnText, 100);

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
    body: "",
    userPosts: []
  });

  // USE EFFECT
  useEffect(()=>{
    API.getPosts().then(function(data) {
      setBlog({...blog, userPosts: data.data})
    })
  }, []);

  // Helper function to capture typing
  const handleChange = (event) => {
    const {name, value} = event.target
    setBlog({...blog, [name]: value});
  };

  // Helper function for button on click
  const handleClick = (event) => {
    console.log(blog)
    event.preventDefault()
    API.savePost(blog).then((result) => {
      //Plain JS to have the page reload every time its refreshed. However it should be covered in UseEffect hook???
      window.location.reload()
    })
  }


  // Helpful log for checking user input
  // console.log("testing new array", blog)

  const CHARACTER_LIMIT = 50;
  const getBleet = bleet;
  return (
    
       <Grid className={classes.form} item xs={6} sm={6} md={12}>

        <form className={classes.root} noValidate autoComplete="off">
          <div>
         <Grid container  >
        
            <Grid
            item xs={12} sm={6}
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start">
                {/* <Profile /> */}
                <TextField
                id="standard-multiline-flexible"
                label="Title"
                placeholder="i.e. Friendly Neighbor"
                multiline
                helperText="Required"
                // required
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
                // required
                inputProps={{
                  maxlength: CHARACTER_LIMIT
                }}
                helperText={`${blog.body.length}/${CHARACTER_LIMIT}`}
                onChange={handleChange}
                //Setting up turnary operator for Character Limit
                // disabled = {blog.body.length >= 50 ? "disabled": ""}
                value={blog.body}
                name="body"
                rows={6}
                variant="outlined"
                // defaultValue="Share your good news!"
                // fullWidth="true"
                style = {{width: 400}}
                /> 
                <Grid direction="row">
                <Button onClick={handleClick} className={classes.what} variant="contained">{getBleet}</Button>  
                {/* <Profile /> */}
                </Grid> 
            </Grid>

            <Grid
            container
            item xs={12} sm={12} md={6}
            direction="column"
            justify="center"
            alignItems="center">
              <VirtualizedList 
              posts={blog.userPosts}/>
            </Grid>
           </Grid>
          </div>
        </form>
    </Grid>  
  );
}


