import React from "react";
import Accordian from "./Accordian";


    const PanelA = (props) => {
        return (<><h2>panel A</h2>

        <button onClick={(e) => props.change(1)}>click</button>
        {
            (props.activePanel === 1
                ? <><p>this is panel A</p>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum tenetur et, molestias,
                        mollitia possimus tempore rem.</p></>
                : null
            )

        }
        </>
        );
    };
    // }
// }
export default PanelA
