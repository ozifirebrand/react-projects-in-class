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
const element1 = <h1>Ibo la chi, {name}, {getGreeting(user)}</h1>
ReactDOM.render(
    element1, document.getElementById("root")
);

setInterval(tick, 1000);

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props){

    return (
        <div className={"Comment"}>
            <UserInfo user = {props.author}/>
            <div className={"CommentText"}>
                {props.text}
            </div>
            <div className={"CommentDate"}>
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Afata(props){
    return (
        <img className={"Afata"}
             src={props.user.afataUrl}
                alt={props.user.name}
    />
    );
}

function UserInfo(props){
    return(
        <div className={"UserInfo"}>
            <Afata user={props.user}/>
            <div className={"UserInfoName"}>
                {props.user.name}
            </div>
        </div>
    );
}

const element = {
    date : new Date(),
    text : "wahala o",
    author: {
        name: "moyin",
        afataUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment date = {element.date}
             text = {element.text}
             author = {element.author}/>, document.getElementById("root"))