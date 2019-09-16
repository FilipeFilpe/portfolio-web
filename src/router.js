import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import BarraLateral from './components/barra-lateral';
import Habilidades from './components/habilidades';
import Projetos from './components/projetos';
import './index.sass';

const Routes = () => (
    <BrowserRouter>
        <div className="left-content">
            <BarraLateral />
        </div>
        <div className="right-content">
            <Habilidades />
            <Projetos />
        </div>
    </BrowserRouter>
);

export default Routes;