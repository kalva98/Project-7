import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';

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

  performSearch = (query = 'waterfall') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o&per_page=24&format=json&nojsoncallback=1`)
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
    console.log(this.state.image);
    return (
      <div>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
        </div>

        <nav class="main-nav">
          <Nav />
        </nav>

        <div className="photo-container">
          {
            (this.state.loading)
              ? <p> Loading...</p>
              : <GifList data={this.state.image} />
          }
        </div>
      </div>
    );
  }
}