import React from "react";

class Clock extends React.Component{
    render() {
        return (
            <div>
                <h1>Hw</h1>
                <h2>Ih {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}