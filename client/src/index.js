// npm packages
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import './scss/main.scss';



// JQuery for Bootstrap
global.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');

// our packages
import App from './app';
import store from './store';
import {requireAuth} from './util';

// our pages
import Home from './pages/home';
import MakeComic from './pages/collection/createComic';
import Comics from './pages/comics';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notfound';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// render on page
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} onEnter={requireAuth} />
        <Route path='createComic/:collectionId' component = {MakeComic }/>
        <Route path="login" component={Login} />
        <Route path="/view/:collectionId" component={Comics}></Route>
        <Route path="register" component={Register} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
