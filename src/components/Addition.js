import React from 'react';
import axios from 'axios';
import '../assets/css/Addition.css'


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
        console.log("si");
        const { value } = e.target
        this.setState({ number1 : value })
    }
    setNumber2 = e =>{
        const { value } = e.target
        this.setState({ number2 : value })
    }

    handleSubmit = e => {
        e.preventDefault();
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


    handleAlternate = e => {
        e.preventDefault();
        axios.post(this.baseUrl + "/calculate/subtraction", {
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
            <div id="sumComponent rounded-pill" className= "add-hr" >
                    <form className = "wraper text-center"id="sumOperans" method="post"onSubmit={ this.handleSubmit } >

                        <input className="reslt text-center" type="text" id="result" placeholder="Resultado" defaultValue={this.state.result} disabled></input>      
                        
                    <div class="row ">
                        <div class="col-sm">
                            <input type="text" id="number1" placeholder="Número 1" onChange={this.setNumber1}></input>
                            <input type="text" id="number2" placeholder="Número 2" onChange={this.setNumber2}></input>
                        </div>
                        <div class="col-sm">
                            <button className="btn" type="submit"> Sumar </button>
                            <button className="btn" onClick = {this.handleAlternate.bind(this)}> Restar </button>
                        </div>
                    </div>
                        
                    </form>
            </div>
        );
    }
}
export default Addition;