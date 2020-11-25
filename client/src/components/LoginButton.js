//With ES7 React tool in VSStore. type 'rafce' and it will generate a boilerplate of a Login Button. 
import React from 'react'
//this is a Hook made by Auth0
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

    //Destructuring the Hook 
    const [loginWithRedirect] = useAuth0();
    

    return (
        // Creating a button that has an onClick function. With JSX logic we can call the const above into an OnClick function
        <button onClick={() => loginWithRedirect()}>
            Log In
        </button>
    )
}

export default LoginButton
