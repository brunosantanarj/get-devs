import React, {Component} from 'react';
import Filtrar from './filtrar';
import Ordernar from './ordenar';

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="title-feature title preto-claro">
                    VESTIDOS
                </div>
                <div className="row">
                    <Filtrar />
                    <Ordernar />
                </div>
            </div>
        )
    }
}

export default Main;