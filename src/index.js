import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CompanyView from './components/Company/companyView.js';
import BranderyView from './components/Brandery/branderyView.js';
import Login from './containers/Login/login.js';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <div id="base">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/brandery" component={BranderyView} />
            <Route path="/company" component={CompanyView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById("root")
);
