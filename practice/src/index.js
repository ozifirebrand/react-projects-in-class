import ReactDOM from "react-dom";


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

function tick(){
    const element = (
        <div>
            <h1>
                Hello, world!
            </h1>
            <h2>
                It is {new Date().toLocaleTimeString()}.
            </h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"))
}

const name = "Ozi Oma"
const element = <h1>Ibo la chi, {name}, {getGreeting(user)}</h1>
ReactDOM.render(
    element,
    document.getElementById("root")
);

setInterval(tick, 1000);
