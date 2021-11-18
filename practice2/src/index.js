import ReactDOM from "react-dom";


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