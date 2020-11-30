import React from 'react'
import API from '../utils/API';

function Quote() {
    React.useEffect(() => {
        API.getFavQs().then(response => console.log(response))
    }, [])
    return (
        <div>
            HELPLPLPLPLL
        </div>
    )
}

export default Quote
