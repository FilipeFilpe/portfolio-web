import React, { Component } from 'react';

import './index.sass';
import Profissional from '../../service/index';

class BarraLateral extends Component {
    profissional = new Profissional().profissional;
    
    render() {
        const showSide = () => {
            document.querySelector('.left-content').style.marginLeft = '0';
        };
        return (
            <div className="container">
                <div className="side-hidden" onClick={showSide} >
                    ==>
                </div>
                <div className="img-profile">
                    <img src={ this.profissional.fotoPerfil } alt={ this.profissional.fotoPerfil } />
                </div>
                <h3 className="title">{ this.profissional.nome }</h3>
                <div>
                    <h6 className="subtitle"> { this.profissional.profissao } </h6>
                    <p className="sobre">
                        { this.profissional.sobre } 
                    </p>
                </div>
                <div>
                    <h6 className="subtitle"> { this.profissional.contato.titulo } </h6>
                    <div>
                        { this.profissional.contato.contatos.map(element => (
                        <span key={element._id+element.url}>
                            {(element.type === "link" &&
                                    <a href={element.url}> {element.url} </a>)
                                || (element.type === "email" &&
                                    <a href={"mailto: "+element.url}> {element.url} </a>)
                                || (element.type === "map" &&
                                    <a href={element.url}> {element.text} </a>)
                            }
                        </span> 
                        )) }
                    </div>
                </div>
            </div>
        )
    }
}

export default BarraLateral;