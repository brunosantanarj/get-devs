import React, { Component } from 'react';

class FiltrarCores extends Component {
    constructor() {
        super();
        this.state = {
            cores:[
                {cor: "Amarelo"},
                {cor: "Azul"},
                {cor: "Branco"},
                {cor: "Cinza"},
                {cor: "Laranja"},
                {cor: "Verde"},
                {cor: "Vermelho"},
                {cor: "Preto"},
                {cor: "Rosa"},
                {cor: "Vinha"}
            ]
        }
    }
    render() {
        return(
            <form>
                <ul className="mobile-fixed--sub">
                    {
                        this.state.cores.map(e =>
                            <li key={e.cor}>
                                <div className="checkbox">
                                    <input type="checkbox" value={e.cor} id={e.cor}/>
                                    <label htmlFor={e.cor}></label>
                                </div>
                                {e.cor}
                            </li>
                        )
                    }
                </ul>
            </form>
        )
    }
}

export default FiltrarCores;
