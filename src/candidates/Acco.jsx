import React, { useState } from "react";
import AccoPanelA from "./AccoPanelA";
import AccoPanelB from "./AccoPanelB";


const Acco=()=> {
    
    const[activePanel,CurrentPanel]=useState(0)
    const change =(e)=>
    {
        CurrentPanel(e);
    }
    return(<>
    <AccoPanelA change={change} activePanel={activePanel}/>
    <AccoPanelB change={change} activePanel={activePanel}/>
    </>)
    
}
export default Acco;