// NEED TO CLEAN BUT UNSURE ABOUT CONFLICTS FROM WHAT WE WORKED ON FRIDAY 
//This is a small example of what we can do with Auth0 from: https://www.youtube.com/watch?v=MqczHS3Z2bc
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
// import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import Bleetify from "bleetify";
import { useHistory } from "react-router-dom";
 
//Bleetify!
const buttonText = "Leave the Herd";
const bleet = Bleetify.bleet(buttonText, 100)

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      marginLeft: '25px',
      marginRight: 'auto',
      display: 'block', 
      marginTop: '10px',
      opacity: 0.75,
      background: '#FF8E53',
      paddingBottom: '5px',
      // borderColor: 'rgb(235, 170, 224)'
      dropShadow: '10px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        textAlign: 'center',
        marginBottom: '5px',
        // background: '#ffb4da'
    },
    avatar: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      opacity: 1
    }
});

export default function Profile() {
    const classes = useStyles();
    const history = useHistory(); 

    // useEffect(() =>{

    // }, [])
    const { user, isAuthenticated } = useAuth0()
    const { logout } = useAuth0();

    if(logout === true) {
      history.push("/");
    }


    // API.getUser(user)

    //{isAuthenticated === false ? history.push("/") : null}

    const getBleet = bleet; 
    
    return (
      isAuthenticated ? (
        <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {user.name}
          </Typography>
          <Typography className={classes.title} color="textPrimary">
            Email: {user.email}
          </Typography>
          <Avatar className={classes.avatar} alt={user.name} src={user.picture} />
        </CardContent>
          <Button variant="contained" className={classes.button} color="secondary" size="small" onClick={() => logout()}>{getBleet}</Button>
         
      </Card>
      ) : (
        <div>
          "Not authenticated"
        </div>
      )
    )
  
    // return (
    //     isAuthenticated && (
    //   <Card className={classes.root}>
    //     <CardContent>
    //       <Typography className={classes.title} color="textPrimary" gutterBottom>
    //         {user.name}
    //       </Typography>
    //       <Typography className={classes.title} color="textPrimary">
    //         Email: {user.email}
    //       </Typography>
    //       <Avatar className={classes.avatar} alt={user.name} src={user.picture} />
    //     </CardContent>
    //       <Button variant="contained" className={classes.button} color="secondary" size="small" onClick={() => logout()}>{getBleet}</Button>
         
    //   </Card>
    //     )
    // );
}