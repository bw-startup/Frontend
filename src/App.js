import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Login from './components/Login';
import Register from './components/Register';
import AllPredictions from './components/AllPredictions';
import MyPredictions from './components/MyPredictions';
import Predict from './components/Predict';
import Navigation from './components/Navigation';

import * as S from './styles';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-backend-startup.herokuapp.com/',
  });

  return (
    <ApolloProvider client={client}>
      <S.GlobalCssReset />
      <S.Container>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/mypredictions'>
              <MyPredictions />
            </Route>
            <Route path='/predict'>
              <Predict />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/'>
              <AllPredictions />
            </Route>
          </Switch>
        </Router>
      </S.Container>
    </ApolloProvider>
  );
};

export default App;