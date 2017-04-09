import React, {Component} from 'react';
import FiltrarCores from './filtrar-cores';
import FiltrarTamanho from './filtrar-tamanho';
import FiltrarPreco from './filtrar-preco';

class FiltrarBox extends Component {
    render() {
        return (
            <div className="mobile-fixed filtrar-box animated fadeInLeft">
                <div className="mobile-fixed--title">
                    FILTRAR
                    <span className="mobile-fixed_close"></span>
                </div>
                <ul className="mobile-fixed--ul">
                    <li className="mobile-fixed--li">CORES <FiltrarCores/></li>
                    <li className="mobile-fixed--li">TAMANHOS <FiltrarTamanho/></li>
                    <li className="mobile-fixed--li">FAIXA DE PREÇO <FiltrarPreco/></li>
                </ul>
                
            </div>
        )
    }
}

export default FiltrarBox;