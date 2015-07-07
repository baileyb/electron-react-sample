import React from 'react';
import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="profile" path="profile/:username" handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);
