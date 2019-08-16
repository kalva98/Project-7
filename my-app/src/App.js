import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import GifList from './Components/GifList';
import SearchForm from './Components/SearchForm';
import './index.css';
import Nav from './Components/Nav';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      loading: true
    };
  }

  performSearch = (query ="food") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          image: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {
    this.performSearch();
  }

  render() {
    return (
      <div className="container">
        <h1>Awesome Gallery App</h1>
        <SearchForm onSearch={this.performSearch} />
       
        <BrowserRouter>
          <Nav performSearch={this.performSearch} />
         
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/flowers" />} />
            <Route path="/flowers" render={(props) => <GifList {...props} data={this.state.image} />} />
            <Route path="/cabin" render={(props) => <GifList {...props} data={this.state.image} />} />
            <Route path="/forest" render={(props) => <GifList {...props} data={this.state.image} />} />
          </Switch>

        </BrowserRouter>
        <div className='photo-container'>
          {
            (this.state.loading)
            ? (<p>Loading...</p>)
              : <GifList data={this.state.image}/>
          }
        </div>
      </div>
    );
  }
}




