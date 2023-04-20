import React from "react";


const AccoPanelA = ({ change, activePanel }) => {
//    const check=()=>{
//         if(activePanel==1)
//         {
//             change(0)
//         }
//         else
//         {
//             change(1)
//         }
//     }
    return (<>
        <h2>Panel A </h2>
        <button onClick={()=>change(1)}>click</button>
        {activePanel === 1
            ? <><p>Panel A </p>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Qui quam doloremque
                    magni quasi suscipit consequuntur voluptate!
                    Facere consectetur vitae sapiente.</p></>
            : null
        }
    </>
    )
}
export default AccoPanelA;