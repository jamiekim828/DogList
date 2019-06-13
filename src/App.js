import React from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
      <Route exact path="/" component={DogsListContainer} />
      <Route exact path="/dog-breeds/:breed/" component={DogBreedImagesContainer} />
      
      </main>
    </div>
  );
}

export default App;
