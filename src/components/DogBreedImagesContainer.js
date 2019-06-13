import React from 'react'
import DogBreedImages from './DogBreedImages'
import superagent from 'superagent'

export default class DogsListContainer extends React.Component {
    state = {
        images : null
    }

    componentDidMount() {
        const breed = this.props.match.params.breed
        superagent
        .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
        .then(response => this.updateImages(response.body.message))
        .catch(console.error)
    }
    
    updateImages(images) {
        this.setState({images: images})
    }

    render() {
        return <DogBreedImages images={this.state.images} />
    }
}