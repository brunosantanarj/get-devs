import React, { Component } from 'react';

class FiltrarTamanho extends Component {
    constructor() {
        super();
        this.state = {
            tamanhos: [
                {tamanho: 'P'},
                {tamanho: 'M'},
                {tamanho: 'G'},
                {tamanho: 'GG'},
                {tamanho: 'U'},
                {tamanho: '36'},
                {tamanho: '38'},
                {tamanho: '40'},
                {tamanho: '42'},
                {tamanho: '46'},
                {tamanho: '48'},
            ]
        }
    }
    render() {
        return (
            <ul className="submenu-quadrado">
                {
                    this.state.tamanhos.map(e => 
                        <li key={e.tamanho} id={e.tamanho} className="submenu-quadrado--li">{e.tamanho}</li>
                    )
                }
            </ul>
        )
    }
}

export default FiltrarTamanho;