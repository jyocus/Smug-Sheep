import React from 'react'
// import Image from 'material-ui-image';


function SheepImage() {
    return (
        
        <div>
            <img src="../../public/happy_sheep.jpg" onError="this.onerror=null; this.src='/images/noimage.gif';" />
        </div>
       
    )
}

export default SheepImage
