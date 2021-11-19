import ReactDOM from "react-dom";
import React from "react";

function formatName(user){
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName:"Ada Nnaya",
    lastName: "Orige"
}

function getGreeting(user){
    if (user){
        return <h1>Hello, {formatName(user)}! </h1>
    }
    return <h1>Hi Stranger.</h1>
}

class Clock extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello fam!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function tick(){
    ReactDOM.render(<Clock date = {new Date()}/>, document.getElementById("root"))
}

const name = "Ozi Oma"
const element = <h1>Ibo la chi, {name}, {getGreeting(user)}</h1>
ReactDOM.render(
    element, document.getElementById("root")
);

setInterval(tick, 1000);
