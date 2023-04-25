import React, { useState } from "react";
import AccoPanelA from "./AccoPanelA";
import AccoPanelB from "./AccoPanelB";
import Panel from "./Panel";

// let panel = [{
//     panelContent: "h",
//     panelTitle: "this"
// }]



const Acco = () => {

    const [activePanel, SetActivePanel] = useState(0)
    const change = (index) => {
        if (activePanel === index) {
            SetActivePanel(null);
        }
        else {
            SetActivePanel(index);
        }
    }
    const panelContent = [{
        Title: "panel A",
        Info: "this is panel A "
    },
    {
        Title: "panel B",
        Info: "this is panel B"
    },
    {
        Title: "panel C",
        Info: "this is panel c"
    },
    ];


    // return(<>
    // <Panel panelContent={panelContent} activePanel={activePanel} change={change}/>
    // {panelContent.map((data,index)=>
    // return(<Panel panelTitle={panelTitle} panelInfo={panelInfo} activePanel={activePanel})
    // {

    // })
    //  }

    {/* <AccoPanelA change={change} activePanel={activePanel}/>
    <AccoPanelB change={change} activePanel={activePanel}/> */}

    // </>
    // )
    return (<>
        {/* <Panel panelContent={panelContent} activePanel={activePanel} change={change} />
       </> );

        {console.log([panelContent])
            panelContent.map((data, index) => {
            return (<>
                <Panel panelTitle={data.Title} panelInfo={data.Info} activePanel={activePanel} index={index} />
                change={change}</>);

        }
        )}
     */}
        {panelContent.map((data, index) => (
            <Panel
                key={index}
                panelTitle={data.Title}
                panelInfo={data.Info}
                activePanel={activePanel}
                index={index}
                change={change}
            />
        ))}
    </>
    );




}
export default Acco;