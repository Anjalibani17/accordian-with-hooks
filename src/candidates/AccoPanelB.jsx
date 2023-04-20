import React, { useState } from "react";


const AccoPanelB = ({ change, activePanel }) => {
    const check=()=>{
        if(activePanel==2)
        {
            change(0)
        }
        else
        {
            change(2)
        }
    }
    return (<>
        <h2>Panel B </h2>
        <button onClick={check}>click</button>
        {activePanel === 2
            ? <><p>Panel B </p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui quam doloremque
                    magni quasi suscipit consequuntur voluptate!
                    Facere consectetur vitae sapiente.</p></>
            : null
        }
    </>
    )
}
export default AccoPanelB;