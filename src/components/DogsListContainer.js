import React from 'react'
import superagent from 'superagent'
import Doglist from './Doglist'

export default class DogsListContainter extends React.Component {
    state = {
        dogBreeds : []
    }

    componentDidMount() {
        superagent
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => this.updateBreeds(Object.keys(response.body.message)))
        .catch(console.error)   
    }

    updateBreeds(breeds) {   
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        return (
            <Doglist dogBreeds = {this.state.dogBreeds} />
        )
    }
}