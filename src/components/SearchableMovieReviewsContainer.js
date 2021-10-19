import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LiTFsyywOwTAoZIUju3rX24pGhzWm6Vh';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{

    state={
      searchTerm: "",
      reviews: []
    }

      handleSubmit = e => {
        e.preventDefault()
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(response=> this.setState({reviews: response.results}))
      }

      handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });
      

    render (){
        return <div className="searchable-movie-reviews">
          <form onSubmit= {this.handleSubmit}>
            <input onChange={this.handleSearchInputChange}></input>
            {/* why couldnt i do an inline searchTerm? and i had to make it a func*/}
          </form>

          <MovieReviews reviews= {this.state.reviews} />
        </div>
    }
}