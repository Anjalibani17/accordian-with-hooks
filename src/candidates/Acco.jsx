import React, { useState } from "react";
import AccoPanelA from "./AccoPanelA";
import AccoPanelB from "./AccoPanelB";


const Acco=()=> {
    
    const[activePanel,SetActivePanel]=useState(0)
    const change =(para)=>
    {
        SetActivePanel(para);
    }
    return(<>
    <AccoPanelA change={change} activePanel={activePanel}/>
    <AccoPanelB change={change} activePanel={activePanel}/>
    </>)
    
}
export default Acco;