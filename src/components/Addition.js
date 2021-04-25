import React from 'react'

class Addition extends React.Component{
    render(){
        return (
            <div id="sumComponent">
                <form id="sumOperans" method="get">
                    <input type="text" id="number1" placeholder="Número 1"></input>
                    <input type="text" id="number2" placeholder="Número 2"></input>
                    <input type="submit" id="result" value="Sumar"></input>
                </form>
            </div>
        );
    }
}
export default Addition;