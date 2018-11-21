// 새로운 컴포넌트를 만듬!
import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types'

class Movie extends Component{

    // 부모 컴포넌트에서 넘어오는 값의 형태가 string인지 아닌지를 체크할수이뜸.
    // isRequired라고 적으면, title이라는 요소가 필수 요소가 되어서 꼭 넘어와야함.
    static propTypes = {
        title: PropTypes.string.isRequired,
        pster: PropTypes.string
      }
    
    render(){
        console.log(this.props)
        // Main 컴포넌트에만 데이터를 다 가지고 있음.
        // Movie 컴포넌트에 있는 tilte이라는 요소를 props로 불러오는것임.
        // Movie 컴포넌트에 있는 poster이라는 요소를 poster컴포넌트에게 줌.
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>            
                <h1>{this.props.title}</h1>
            </div>
        )
    }

}

class MoviePoster extends Component{
    static propTypes = {
        poster: PropTypes.string.isRequired,
      }

    render(){
        //console.log(this.props)
        return(
            <img src={this.props.poster} />
        )
    }
}


export default Movie

/*
리액트에는 2개의 주요 컨셉 - state, props

props - 

메인 컴포넌트 App은 모든 영화의 리스트가 있음. 
그 리스트 안의 영화카드엔 해당 영화의 정보가 각각 담길것임.
즉, 부모 컴포넌트는 칠드런 컴포넌트에게 각각 정보를 준다는 뜻임.
어떻게 부모가 자식에게 정보를 주느냐? props를 통해서임.

*/