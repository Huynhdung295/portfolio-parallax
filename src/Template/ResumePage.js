import React from 'react'
import Resume from '../Component/MyResume/Resume/Resume'
import Button from "../Component/Button/Button"
function ResumePage() {
    return (
        <div>
            <Resume />
           <div className ="button-fixed">
           <Button content="Go back Home" linkTo="/" text="text-dark-b" />
           </div>
        </div>
    )
}

export default ResumePage
