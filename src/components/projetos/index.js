import React, {Component} from 'react';

import Profissional from '../../service';
import './index.sass';

class Projetos extends Component {
    render() {
        const { projetos } = new Profissional().profissional;
        console.log(projetos);
        return (
            <div className="container-projetos">
                <div className="titulo">{ projetos.titulo }</div>
                <div className="projetos">
                    {projetos.items.map(e => (
                        <div className="projeto" key={e.nome+e.imageThumb}>
                            <img src={ e.imageThumb } alt="" />
                            <div>
                                <h6> { e.nome } </h6>
                                <span> {e.descricao} </span>
                                <div>
                                    {e.tecnologias.map(tec => (
                                        <div className="tecnologia" key={e.nome+tec} >
                                            <span> {tec} </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> 
                    )) }
                </div>
            </div>
        )
    }
}

export default Projetos;