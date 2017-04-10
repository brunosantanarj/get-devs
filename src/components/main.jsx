import React, {Component} from 'react';
import Filtrar from './filtrar';
import Ordernar from './ordenar';
import Produto from './produto';

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="title-feature title preto-claro font-default">VESTIDOS</h1>
                <div className="row">
                    <Filtrar />
                    <Ordernar />
                    <Produto />
                </div>
            </div>
        )
    }
}

export default Main;
