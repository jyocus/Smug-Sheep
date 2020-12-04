// https://material-ui.com/getting-started/usage/
// https://www.youtube.com/watch?v=PWadEeOuv5o
import React from 'react';
import { useHistory } from "react-router-dom";
import "../index.css";

// Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

// Iconify
import { Icon} from '@iconify/react';
import sheepIcon from '@iconify-icons/mdi/sheep';

//Imported Components 
import LoginButton from "../components/LoginButton"
import Profile from "../components/Profile"

// Auth0
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

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0()

  if(isAuthenticated === true) {
    history.push("/blog");
  }

  return (
    <React.Fragment>
      {/* Main Container  */}
      <Container className="main" component="main" maxWidth="xs">
        <CssBaseline />
          {/* Login Card Component  */}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <Icon icon={sheepIcon} />
            </Avatar>
            <Typography component="h1" variant="h5">
              ready for some good news?
            </Typography>
            <form className={classes.form} noValidate>
              {isAuthenticated === true ? "" : <LoginButton />}
            </form>
          </div>
        {/* Copyright    */}
        <Box mt={8}>
          <Copyright /> 
        </Box>
      </Container>
      {/* Profile Component  */}
      <Profile />
    </React.Fragment>
  );
}