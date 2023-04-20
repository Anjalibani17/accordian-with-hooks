import React, { useState } from "react";
import AccoPanelA from "./AccoPanelA";
import AccoPanelB from "./AccoPanelB";
import Panel from "../Panel";

let panel=[{panelContent:"h",
            panelTitle:"this"}]
            

const Acco=()=> {
    
    const[activePanel,SetActivePanel]=useState(0)
    const change =(para)=>
    {
       if(activePanel==para)
        {
            SetActivePanel(0);

        }
        else
        {
            SetActivePanel(para);
        }
    }
    
        

    return(<>
    {/* <AccoPanelA change={change} activePanel={activePanel}/>
    <AccoPanelB change={change} activePanel={activePanel}/> */}
    
    panel.map((panelContent,panelTitle) => {
    <panel change={change} activePanel={activePanel} panelContent={panelContent} panelTitle={panelTitle} />

    })
    </>
    )

    
    
}
export default Acco;