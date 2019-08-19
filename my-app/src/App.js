import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//App components
import GifList from './Components/GifList';
import SearchForm from './Components/SearchForm';
import './index.css';
import Nav from './Components/Nav';

//Index.js is entry file for App cause it imports parent component for App.js & allows for use of App tag in ReactDOM.render
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      loading: true
    };
  }
//Used get request axios to obtain images from Flickr 
  performSearch = (query = "sunset") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        //Setstate to dynamically capture the array of image
        this.setState({
          image: response.data.photos.photo,
          loading: false
        });
      })
      //Catch error code captures error retrieving JSon data
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  componentDidMount() {
    this.performSearch();
  }

  //Routes
  render() {
    return (
      <div className="container">
        <h1>React Gallery App</h1>
        

        <BrowserRouter>
          <SearchForm onSearch={this.performSearch} />
          <Nav performSearch={this.performSearch} />
          {/*using switch implements a downward sequence for checking the urls path (parent & children)*/}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountains" />} />
            <Route path={`match.search/:id`} component={SearchForm} />
            <Route path="/hydrangeas" render={(props) => <GifList {...props} data={this.state.image} />} />
            <Route path="/mountains" render={(props) => <GifList {...props} data={this.state.image} />} />
            <Route path="/forest" render={(props) => <GifList {...props} data={this.state.image} />} />
            
          </Switch>

        </BrowserRouter>
        <div className='photo-container'>
          {
            (this.state.loading)
              ? (<p>Loading...</p>)
              : <GifList data={this.state.image} />
          }
        </div>
      </div>
    );
  }
}




