import React, {useEffect} from 'react';
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
    body: "",
    userPosts: []
  });
  //const userPosts = [];


  useEffect(()=>{

    console.log('HAPPENING!! one time!!')

    API.getPosts().then(function(data) {
      console.log('anyhting back from db ???', data)

      setBlog({...blog, userPosts: data.data})

    })


  }, [])

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

      //Plain JS to have the page reload everytime its refereshed. However it should be covered in UseEffect hook???
      window.location.reload()
      
      //setValue(result);
    })
    //console.log("testing event data", event)
    //userPosts.push(event.target.value)
    //console.log("User Post Array", userPosts);

  }



  console.log("testing new array", blog)

  
  // const style= {
  //   warning: {
  //     display: blog.body.length >= 50 ? "" : "none"
  //   }
  // }

  // const resetForm = () => {
  //   // blog.body.length
  //   var deletedLetter = blog.body.substring(0, blog.body.length - 1);
  //   console.log("Did the letter delete????", deletedLetter)

  //   // setState, ...blog is making a copy of the entire State, and then we just want to update the body object key. and change it to the var above
  //   setBlog({...blog, body:deletedLetter})

  // }
  const CHARACTER_LIMIT = 50;

  return (
       <Grid className={classes.form} item xs={6} md={12}>

          {/* <div style={style.warning}>You Exceeded the Amount of Letters in a Blog 
            <button input="submit" onClick={() => {resetForm()}}>OK</button>
          </div> */}

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
                inputProps={{
                  maxlength: CHARACTER_LIMIT
                }}
                helperText={`${blog.body.length}/${CHARACTER_LIMIT}`}
                onChange={handleChange}
                //Setting up turnary operator for Character Limit
                // disabled = {blog.body.length >= 50 ? "disabled": ""}
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
              <VirtualizedList 
              posts={blog.userPosts}/>
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


