import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: "You"}
    }

    static getDerivedStateFromProps(props, state){
        return { name: props.favName}
    }

    render() {
        return(
            <div>
                My name is {this.state.name}
            </div>
        )
    }
}
export default Header