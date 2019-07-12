import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faGit, faReact, faJs, faWordpressSimple, faSass, faPhp, faJoomla } from '@fortawesome/free-brands-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class Profissional {
    profissional = {
        _id: "1794531",
        fotoPerfil: "https://picsum.photos/200/200",
        nome: "Filipe Sousa dos Santos",
        profissao: "Web Developer",
        sobre: "Bacharel em Sistemas de Informação, formado pela UNICEPLAC antiga FACIPLAC.",
        contato: {
            titulo: "Informações/Contato",
            contatos: [
                {
                    type: "link",
                    rede: "linkedin",
                    url: "linkedin.com/in/filipe.filpe"
                },
                {
                    type: "link",
                    rede: "github",
                    url: "github.com/filipefilpe"
                },
                {
                    type: "email",
                    rede: "gmail",
                    url: "sfilipef@gmail.com"
                },
                {
                    type: "map",
                    text: "Gama - Brasília/DF"
                }
            ]
        },
        habilidades: {
            titulo: "Habilidades",
            items: [
                { icon: <FontAwesomeIcon icon={faHtml5} />, nome: "HTML" },
                { icon: <FontAwesomeIcon icon={faCss3Alt} />, nome: "CSS" },
                { icon: <FontAwesomeIcon icon={faJs} />, nome: "Javascript" },
                { icon: <FontAwesomeIcon icon={faWordpressSimple} />, nome: "Wordpress" },
                { icon: <FontAwesomeIcon icon={faPhp} />, nome: "PHP" },
                { icon: <FontAwesomeIcon icon={faJoomla} />, nome: "Joomla" },
                { icon: <FontAwesomeIcon icon={faReact} />, nome: "React" },
                { icon: <FontAwesomeIcon icon={faSass} />, nome: "Sass" },
                { icon: <FontAwesomeIcon icon={faGit} />, nome: "Git" },
            ]
        },
        projetos: {
            titulo: "Construções",
            items: [
                {
                    imageThumb: "https://picsum.photos/300/320?random=1", 
                    nome: "Projeto X",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    tecnologias: ["HTML", "CSS", "Javascript", "Wordpress"],
                },
                {
                    imageThumb: "https://picsum.photos/300/320?random=2", 
                    nome: "Projeto X",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua.",
                    tecnologias: ["HTML", "CSS", "Javascript", "Wordpress"],
                },
                {
                    imageThumb: "https://picsum.photos/300/320?random=3",
                    nome: "Projeto X",
                    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua. Consectetur adipiscing.",
                    tecnologias: ["HTML", "CSS", "Javascript", "Wordpress"],
                }
            ]
        }
    };
}

export default Profissional;