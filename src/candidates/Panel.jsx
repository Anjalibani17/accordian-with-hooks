import React from "react";
import Acco from "./Acco";
//const Panel = ({ panelContent, change, activePanel ,index,panelTitle}) => {
    const Panel = ({ panelTitle, panelContent, activePanel, change, index ,panelInfo}) => {

        return (
            <>
            {/* <h2>{panelTitle}</h2>
                {panelContent.map((data, index) => {
                    return (<>
                        
                        <button onClick={() => change(index)}>Click</button>
                        {(activePanel == index
                            ?
                            <>
                                <p>{panelInfo}</p>
                            </>
                            : null
                        )}
                    </>)

                })
                } */}
                
    
      <h2>{panelTitle}</h2>
      <button onClick={() => change(index)}>click</button>
      {activePanel === index && <p>{panelInfo}</p>}
    </>
  );
};



   
//     return(<>

//         <h2>{panelTitle}</h2>
//         <button onClick={() => { change(index) }}>{(activePanel === index) ? "-" : "+"}</button>


//         <p>{panelContent}</p>

//     </>);
// }
export default Panel;
