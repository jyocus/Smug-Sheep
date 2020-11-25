//This is a small example of what we can do with Auth0 from: https://www.youtube.com/watch?v=MqczHS3Z2bc
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
//Optional npm package to make stringified objects 'prettier'
import JSONPretty from "react-json-pretty";
    // ---->   <JSONPretty data={ user }/>
import Test from "./Test";


export const Profile = () => {

    //the isAuthenticated setState(?) property now it will only be rendered if user is authenticated. Need some JSX at the Bottom.
const { user, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
    <div>
        <JSONPretty data={ user }/>
    {/* <img src={user.picture} alt={user.name} />
        <h1>{user.name}</h1>

        <p>Reach out to me about my baaaaogs at: {user.email} </p>
            

        <footer>Is my Email Verified: {user.email_verified} </footer>             */}
    </div>
    )
)

}

export default Profile