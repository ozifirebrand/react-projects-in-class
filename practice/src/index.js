import ReactDOM from "react-dom";


function formatName(user){
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName:"Ada Nnaya",
    lastName: "Orige"
}


const name = "Ozi Oma"
const element = <h1>Ibo la chi, {name}, {formatName(user)}</h1>
ReactDOM.render(
    element,
    document.getElementById("root")
);