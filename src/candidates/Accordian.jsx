import React from "react";
import PanelA from "./PanelA";

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            activePanel: 0

        }
        this.change = this.change.bind(this);
        
    }
 
    change(e) {
        console.log(e)
        if(e==2)
        {
            this.setState({ activePanel: 2 })
        }
        else
        {
            this.setState({ activePanel: 1 })
        }
        
    }
    render() {
        return (<><h2>panel A</h2>

            <button onClick={(e)=>this.change(1)}>click</button>
            {
                (this.state.activePanel === 1
                    ? <p>this is panel A</p>
                    : null
                )

            }



            <h2>Panel B</h2>

            <button onClick={(e)=>this.change(2)}>click</button>
            {
                (this.state.activePanel === 2
                    ? <p>this is panel B</p>
                    : null
                )

            }


        </>)
    }
}
export default Accordian




