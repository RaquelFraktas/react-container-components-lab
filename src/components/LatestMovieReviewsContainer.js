import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LiTFsyywOwTAoZIUju3rX24pGhzWm6Vh';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {

    state={
      reviews: [],

    }

    componentDidMount(){
      this.fetchLatestReviews()
    }

    fetchLatestReviews= () => {
      fetch(URL)
      .then(response => response.json())
      .then(response=> this.setState({reviews: response.results}))
    }


    render (){
      return  <div className= "latest-movie-reviews">
          <MovieReviews reviews= {this.state.reviews}/>
       </div>
      
    }

}