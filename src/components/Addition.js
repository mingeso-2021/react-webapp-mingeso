import React from 'react'
import axios from 'axios';

class Addition extends React.Component{
    baseUrl = "http://localhost:8081/";
    constructor(){
        super();
        this.state = {
            number1 : "",
            number2 : "",
            result : ""
        };
    }

    setNumber1 = e =>{
        const { value1 } = e.target
        this.setState({ 
            number1 : value1
        })
    }
    setNumber2 = e =>{
        const { value2 } = e.target
        this.setState({ 
            number2 : value2
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post(this.baseUrl + "/adder/sum", this.state)
            .then((response)=>{
                this.setState({result: response.data})
                console.log(response.data)
            })
            .catch((err => console.log("cuaujjsh")));
    };

    render(){
        return (
            <div id="sumComponent" onSubmit={this.handleSubmit}>
                <form id="sumOperans" method="get">
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