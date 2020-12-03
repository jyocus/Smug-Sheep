// https://material-ui.com/getting-started/usage/
// https://www.youtube.com/watch?v=PWadEeOuv5o
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import MoodIcon from '@material-ui/icons/Mood';
import { Icon, InlineIcon } from '@iconify/react';
import sheepIcon from '@iconify-icons/mdi/sheep';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import "../index.css";

//Imported Components 
import LoginButton from "../components/LoginButton"
import LogoutButton from "../components/LogOutButton"
import Profile from "../components/Profile"

import { useAuth0 } from '@auth0/auth0-react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" target="_blank">
        Smug Sheep
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const name = 'Bill'

//var whatColor = name === 'Tom' ? (<h1> Hello tom!</h1>) : ''

// if (name === 'Tom') {
//   return 'red'
// }
// else {
//   return 'blue'
// }



export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();

  const { user, isAuthenticated } = useAuth0()
  console.log('isAutheticated in signup page!!', isAuthenticated)

  if(isAuthenticated === true) {
    history.push("/blog");
  }

  return (
    <React.Fragment>
    <Container className="main" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Icon icon={sheepIcon} />
        </Avatar>
        <Typography component="h1" variant="h5">
          ready for some good news?
        </Typography>
       
        <form className={classes.form} noValidate>
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {isAuthenticated === true ? "" : <LoginButton />}
          {/* <LoginButton /> */}
          {/* <LogoutButton /> */}
          
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
          
      </Box>
    </Container>
    {/* HERE IS THE PROFILE COMPONENT  */}
    <Profile />
    </React.Fragment>
  );
}