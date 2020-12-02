//This is a small example of what we can do with Auth0 from: https://www.youtube.com/watch?v=MqczHS3Z2bc
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
//Optional npm package to make stringified objects 'prettier'
import JSONPretty from "react-json-pretty";
    // ---->   <JSONPretty data={ user }/>
import Test from "./Test";
import API from "../utils/API";
import LogOutButton from "./LogOutButton"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block', 
      marginTop: '10px',
      opacity: 0.75
    //   background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)'
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
        marginBottom: '5px'
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
    const { user, isAuthenticated } = useAuth0()
    API.getUser(user)
    // const bull = <span className={classes.bullet}>•</span>;
  
    return (
        isAuthenticated && (
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
          <Button href="/blog" variant="contained" className={classes.button} color="secondary" size="small">Start Shearing</Button>
      </Card>
        )
    );
}


// export const Profile = () => {

//     //the isAuthenticated setState(?) property now it will only be rendered if user is authenticated. Need some JSX at the Bottom.
// const { user, isAuthenticated } = useAuth0()



// API.getUser(user)

//     return (
//         isAuthenticated && (
//             <div>
//             {/* <JSONPretty data={ user }/> */}
//             <a href="/blog">blog</a>
//             <LogOutButton />
            
//         <img src={user.picture} alt={user.name} />
//             <h1>{user.name}</h1>
    
//             <p>Reach out to me about my baaaaogs at: {user.email} </p>
                
    
//             <footer>Is my Email Verified: {user.email_verified} </footer>            
//         </div>
//     )
// )

// }

// export default Profile