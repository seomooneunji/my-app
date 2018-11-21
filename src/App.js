import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


/*
리액트는 컴포넌트 중심!
앱 컴포넌트는 각기 다른 function과 method를 갖음.
모든 컴포넌트는 render function을 갖음. 
render기능은 '뭔가를 보여주는.출력하는'기능.
*/

const movies = [
  {
    title: "Matrix",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPutwkAVwLv99nNVwMXaLkPGzY3iYDmNb8G_Dun-WrxOuDUKni"
  },
  {
    title: "fullmetaljacket",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    title: "oldboy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPutwkAVwLv99nNVwMXaLkPGzY3iYDmNb8G_Dun-WrxOuDUKni"
  },
  {
    title: "star wars",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  }
]


// 위 영화들의 title을 childeren 컴포넌트인 Movie컴포넌트에 보내고 싶다면?!
class App extends Component {
  render() {
    return (
      <div className="App">
        hello!
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })
        }

      </div>
    );
  }
}

/*
        <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
*/

// Movie 컴포넌트는 값이 담겨있는 'title'이라는 데이터를 얻게 되었음. 

export default App;
