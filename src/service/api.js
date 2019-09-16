import React, {Component} from 'react';
import axios from  'axios';

const API_URL = 'http://localhost:3001';

class Api extends Component{
    state = {
        profissionais: []
    }

    componentDidMount() {
        const url = `${API_URL}/profissionais/`;
        axios.get(url)
        .then(response => response.data)
        .then((data) => {
            this.setState({profissionais: data})
            console.log(this.state.profissionais);
        })
    }
}

export default Api;