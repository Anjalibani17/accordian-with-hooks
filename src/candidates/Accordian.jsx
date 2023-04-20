import React from "react";
import PanelA from "./PanelA";
import PanelB from "./PanelB";

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            activePanel: 0

        }
        this.change = this.change.bind(this);

    }
    componentDidUpdate(prevState) {
        console.log(this.state.activePanel)
        // console.log(prevState)



    }

    change(e) {
        console.log(e)
        this.setState({ activePanel: e })


        // if (e == 2) {
        //     this.setState({activePanel: 2})

        //     // console.log(this.state.activePanel)

        // }
        // else {
        //     this.setState({ activePanel: 1 })
        //     // console.log(this.state.activePanel)
        // }

    }
    render() {
        return (<>
            <PanelA change={this.change} activePanel={this.state.activePanel} />
            <PanelB change={this.change} activePanel={this.state.activePanel} />
            {/* { <h2>panel A</h2>

            <button onClick={(e) => this.change(1)}>click</button>
            {
                (this.state.activePanel === 1
                    ? <><p>this is panel A</p>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eum tenetur et, molestias,
                            mollitia possimus tempore rem.</p></>
                    : null
                )
            }
            <h2>Panel B</h2>

            <button onClick={(e) => this.change(2)}>click</button>
            {
                (this.state.activePanel === 2
                    ? <><p>this is panel B</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, quia.</p></>
                    : null
                )

            } } */}


        </>)
    }
}
export default Accordian




