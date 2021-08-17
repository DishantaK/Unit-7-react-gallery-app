import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';



import './css/index.css'

import Nav from './components/Nav'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';


class App extends React.Component {

  

  render (){
    return (
      <div className="container">
          <SearchForm />
          <Nav />
          <BrowserRouter forceRefresh={true}>
            <Switch {...this.props}>
              <Route exact path="/" component={Gallery} />
              <Route path="/search/:query" component={Gallery} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
         
      </div>
    );
  }
}

export default App;

