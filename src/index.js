import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GithubCorner from 'react-github-corner';
import Clock from './Clock';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <GithubCorner target="_blank" href="https://github.com/jitencodes/"  bannerColor="#000" />
  </React.StrictMode>
);


