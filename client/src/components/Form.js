import React, {useEffect} from 'react';
// Components 
import VirtualizedList from './List';
import API from '../utils/API';
import Profile from './Profile'; 
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Bleetify!
import Bleetify from "bleetify";
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
  },
  // list: {
  //   [theme.breakpoints.down('md')]: {
  //     backgroundColor: 'red',
  //   },
  // }
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
    // grab values from state-< title body
    let {title, body} = blog;
    console.log(blog)
    event.preventDefault()
    API.savePost({
      title, body
    }).then((result) => {
      // setBlog with new userPost
        // create post obj
        let newPost = {
          title, body
        }
        // make temp array from userPosts[]
        let tempArray = blog.userPosts;
        // push new obj to start of temp array
        tempArray = [newPost, ...tempArray];
        // tempArray.push(newPost)
        // setState with new temp array, title "" body ""
        setBlog({
          userPosts: tempArray,
          title: "",
          body: ""
        })
    })
  };

  const CHARACTER_LIMIT = 300;
  const CHARACTER_LIMIT_TITLE = 25;
  const getBleet = bleet;

  return (

    <Grid className={classes.form} item xs={6} sm={6} md={12}>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <Grid container>
            <Grid
              item xs={12} sm={6}
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start">
              {/* TITLE INPUT    */}
              <TextField
                id="standard-multiline-flexible"
                label="Title"
                placeholder="i.e. Friendly Neighbor"
                multiline
                inputProps={{
                  maxlength: CHARACTER_LIMIT_TITLE
                }}
                helperText={`${blog.title.length}/${CHARACTER_LIMIT_TITLE}`}
                name="title"
                value={blog.title}
                rowsMax={4}
                onChange={handleChange}
                variant="outlined"
                style={{ width: 400 }}
              />
              {/* BODY INPUT  */}
              <TextField
                id="standard-multiline-static"
                label="Body"
                placeholder="Before the storm started my neighbor brought in my favorite plants. Thank you!"
                multiline
                inputProps={{
                  maxlength: CHARACTER_LIMIT
                }}
                helperText={`${blog.body.length}/${CHARACTER_LIMIT}`}
                onChange={handleChange}
                value={blog.body}
                name="body"
                rows={6}
                variant="outlined"
                style={{ width: 400 }}
              />
              {/* BLEET BUTTON  */}
              <Grid direction="row">
                <Button onClick={handleClick} className={classes.what} variant="contained">{getBleet}</Button>
              </Grid>
            </Grid>
            {/* USER POSTS CONTAINER */}
            <Grid
              container
              item xs={12} sm={12} md={6}
              direction="column"
              justify="center"
              alignItems="center">
              <VirtualizedList
               posts={blog.userPosts} />
            </Grid>
          </Grid>
        </div>
      </form>
    </Grid>
  );
};


