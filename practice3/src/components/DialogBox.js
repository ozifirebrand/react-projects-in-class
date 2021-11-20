import React from "react";
import ReactDOM from "react-dom";

class DialogBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: "You"};
    }
    render() {
        return(
            <div>
                <h1> Hello {this.state.name} </h1>
                <h2>Kindly register</h2>

            </div>

        )
    }
}
export default DialogBox
// ReactDOM.render(<DialogBox/>, document.getElementById("root"))