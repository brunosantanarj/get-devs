import React, { Component } from 'react';

class FiltrarPreco extends Component {
    constructor() {
        super();
        this.state = {
            precos:[
                {id: '1', preco: 'de R$ 0 até R$ 50'},
                {id: '2', preco: 'de R$ 51 até R$ 150'},
                {id: '3', preco: 'de R$ 151 até 300'},
                {id: '4', preco: 'de R$ 301 até 500'},
                {id: '5', preco: 'a partir de R$ 501'}
            ]
        }
    }
    render() {
        return (
            <form>
                <ul className="mobile-fixed--sub">
                    {
                        this.state.precos.map(e => 
                            <li key={e.id}>
                                <div className="checkbox">
                                    <input type="checkbox" value={e.preco} id={e.preco}/>
                                    <label htmlFor={e.preco}></label>
                                </div>
                                {e.preco}
                            </li>
                        )
                    }
                </ul>
            </form>
        )
    }
}

export default FiltrarPreco;