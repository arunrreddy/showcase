import "babel-polyfill";
import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducer from './reducer';
import Gallery from './components/Gallery';

import '../css/styles.css';

const store = createStore(reducer, applyMiddleware(thunk));


render(<Provider store={store}>
    <Gallery/>
    </Provider>, document.getElementById('app'));
