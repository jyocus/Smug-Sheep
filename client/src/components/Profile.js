//This is a small example of what we can do with Auth0 from: https://www.youtube.com/watch?v=MqczHS3Z2bc
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';



export const Profile = () => {

const { user } = useAuth0()

    return (
        <div>
            <h1>{JSON.stringify(user, null, 2)}</h1>
        </div>
    )
}

export default Profile