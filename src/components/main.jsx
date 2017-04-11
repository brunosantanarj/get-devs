import React, {Component} from 'react';
import Filtrar from './filtrar';
import Ordernar from './ordenar';
import Produto from './produto';
import CarregarMais from './carregar-mais';

class Main extends Component {
    render() {
        return (
            <main className="wrapper">
                <h1 className="title-feature title preto-claro font-default">VESTIDOS</h1>
                <div className="row">
                    <Filtrar />
                    <Ordernar />
                    <Produto />
                </div>
                <CarregarMais/>
            </main>
            
        )
    }
}

export default Main;
