import React from 'react';

export default class PizzaComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pedido: ""
        }
    }

    componentDidMount(){
        setTimeout(() =>{this.setState({pedido:"Pizza americana"})}, 2000)
    }

    componentDidUpdate(){
        console.log("Se actualizó el componente");
    }

    cancelarPedido(){
        alert("El pedido se va a cancelar")
    }

    
    render() {
        return (
        <>
        <h1>Tu Pedido: {this.state.pedido}</h1>
        <button onClick={this.cancelarPedido}>Cancelar pedido</button>
        </>
        )
    }
}