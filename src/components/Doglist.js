import React from 'react'

export default class DogList extends React.Component {
    
    
    displayDogBreeds() {
        if (this.state.dogBreeds === null) {
          return <h1>Loading...</h1>
        }
        return <h1>{ this.state.dogBreeds }</h1>
    }

    renderDogBreed(breed) {
        return <li key={breed}>{breed}</li>
    }

    render() {
        
        const { dogBreeds } = this.props
        return (
            <div className="dog-list">
                <h1>Dog List</h1>
            <br/>
            { !dogBreeds && 'Loading...'}
            { dogBreeds &&
              <ul>
                { this.props.dogBreeds.map(breed => this.renderDogBreed(breed)) }
              </ul> }
            </div>
        )
    }

}