// With ES7 React tool in VSStore - type 'rafce' and it will generate a boilerplate of a ComponentName.js. 
import React from 'react'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// Auth0
import { useAuth0 } from '@auth0/auth0-react'

const useStyles = makeStyles(theme => ({
    '@global': {
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
      }
}));

const LoginButton = () => {
    const classes = useStyles
    //Destructuring the Hook 
    const { loginWithRedirect } = useAuth0();
    return (
        <Button onClick={() => loginWithRedirect()}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}>
            Join the Flock!
        </Button>
    )
};

export default LoginButton
