import React from 'react'
import axios from 'axios';

class Addition extends React.Component{

    constructor(){
        super();
        this.baseUrl = process.env.REACT_APP_BASE_URL;
        this.state = {
            number1 : "",
            number2 : "",
            result : ""
        };
    }

    setNumber1 = e =>{
        const { value } = e.target
        this.setState({ number1 : value })
    }
    setNumber2 = e =>{
        const { value } = e.target
        this.setState({ number2 : value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(process.env);
        axios.post(this.baseUrl + "/calculate/sum", {
            number1 : this.state.number1,             
            number2 : this.state.number2
        })
        .then( response => {
            this.setState({
                result: response.data.result
            });
        })
        .catch( err => console.log(err) );
    };

    render(){
        return (
            <div id="sumComponent" onSubmit={ this.handleSubmit }>
                <form id="sumOperans" method="post">
                    <input type="text" id="number1" placeholder="Número 1" onChange={this.setNumber1}></input>
                    <input type="text" id="number2" placeholder="Número 2" onChange={this.setNumber2}></input>
                    <input type="text" id="result" placeholder="Resultado" defaultValue={this.state.result} disabled></input>
                    <input type="submit" id="result" value="Sumar"></input>
                </form>
            </div>
        );
    }
}
export default Addition;