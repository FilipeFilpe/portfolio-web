import React, {Component} from 'react';

import Profissional from '../../service';
import './index.sass';

class Habilidades extends Component {
    render() {
        const { habilidades } = new Profissional().profissional;
        return (
            <div className="container-habilidades">
                <div className="titulo"> {habilidades.titulo} </div>
                <div className="items">
                    {habilidades.items.map( e => (
                        <div className="item" key={e._id+e.nome}>
                            { e.icon }
                            <span>{ e.nome }</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Habilidades;