import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM이 render(출력한다), 무엇을? <App /> 컴포넌트를~ (App.js),
// 어디에? Id가 'root'인 곳에!~ , root는 index.html에 있음.

// 정리하면 -> 1개의 App이라는 컴포넌트를 render하고 있음.
// App 컴포넌트 안에 여러개의 컴포넌트를 만들 수있음. 지금은 출력을 1개만 하고있음.
// 하나의 컴포넌트 render, 그 다큐먼트 안에 엘리먼트가 있는데 엘리먼트의 ID는 root.


// React는 UI라이브러리, ReactDOM은 리액트를 웹사이트에 출력하는걸 도와주는 모델
// React를 웹사이트에 올려놓고싶으면 ReactDOM,
// React를 앱에 올려놓고싶으면 React Native
serviceWorker.unregister();
