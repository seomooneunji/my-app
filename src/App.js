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

/*
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
*/

// 위 영화들의 title을 childeren 컴포넌트인 Movie컴포넌트에 보내고 싶다면?!
// render(컴포넌트가 존재하기 시작하면, 이 순서로 작동) -  componentWillMount() -> render() -> componentDidMount() 
// update - componentWillReceivePros(): 컴포넌트가 새로운 props를 받았다는 뜻 -> shouldCompoenetUpdate()=== true리액트는 ol props와 new props를 살펴본후 이전과 새로운 props가 다르면, 리액트는 '업데이트=true'라고 생각함.-> componentWillUpdate():-> render() ->componentdidUpdate()
class App extends Component {
  /*
  componentWillMount(){
    //api에 작업 요청, 
    //이 작업수행이 완료되면 데이터 관련된 작업을 할것임.
  } */

  state = {}

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callAPI()
    // movies는  callAPI라는 function을 await모드에서 value로 갖고있음. 
    // await로 하는 것은 call api 작업이 완료되는것을 기다림 (성공정인 수행이 아니라)
    this.setState({
      movies 
    })

    
  }

  _callAPI = () => {
   // 컴포넌트가 mount되면-> 5초를 기다리고 greeting을 업데이트 할것임.
    // 업데이트 할때마다 render() 이 새로운 state와 함꼐 다시 작동함.
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json()) 
    //then function은 1개의 attribute만 줌. fetch의 결과물인, 오브젝트임.
    //이것은 fetch에 어떤 결과가 나타났느냐에 관한것을 보는 것임. 
    //여기서 받은 response오브젝트를 우리가 확인 할 수 있는 제이슨으로 바꿔야함.
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres} 
      synopsis={movie.synopsis}/>
    })
    return movies
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
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
