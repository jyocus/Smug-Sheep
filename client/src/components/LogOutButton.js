import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



function LogOutButton() {

    const { logout } = useAuth0();


    return (
        <button onClick={() => logout({returnTo: "/test"})}>
            Log Out
        </button>
    )
}

export default LogOutButton
