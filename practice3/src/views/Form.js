import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={value:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('http://localhost:8080/add/person', {
            method: 'POST',
            body: data
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label>

                <input type="submit" value="Submit"/>
            </form>
        );
    }
}