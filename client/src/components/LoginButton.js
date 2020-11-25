//With ES7 React tool in VSStore. type 'rafce' and it will generate a boilerplate of a ComponentName.js. 
import React from 'react'
//Importing the Hook makeStyles from @material
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//this is a Hook made by Auth0
import { useAuth0 } from '@auth0/auth0-react'
import API from '../utils/API';

const useStyles = makeStyles(theme => ({
    '@global': {
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
      }
}))


const LoginButton = () => {
    const classes = useStyles

   

    //Destructuring the Hook 
    const {loginWithRedirect} = useAuth0();


    

    return (
        // Creating a button that has an onClick function. With JSX logic we can call the const above into an OnClick function
        <Button onClick={() => loginWithRedirect()}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}>
            Log In
        </Button>
    )
}

export default LoginButton
