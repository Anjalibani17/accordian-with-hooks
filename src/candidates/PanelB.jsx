import React from "react";
import Accordian from "./Accordian";

// class PanelA extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =
//         {
            

//         }
//        // this.change = this.change.bind(this);

//     }
//     render()
//     {
    const PanelB =(props)=>{
        return (<><h2>panel B</h2>

        <button onClick={(e) => props.change(2)}>click</button>
        {
            (props.activePanel == 2
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
export default PanelB
