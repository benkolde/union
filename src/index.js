import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CompanyView from './components/Company/companyView.js';
import BranderyView from './components/Brandery/branderyView.js';
import Login from './containers/Login/login.js';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga'
import { loginSaga } from './sagas/sagas.js'
import {Provider} from 'react-redux';
import reducers from './reducers';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
let CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

class App extends Component{
  render(){
    sagaMiddleware.run(loginSaga);

    //Animating page transitions
    const FadingRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        <CSSTransitionGroup transitionName="pages"
        transitionAppear={true}
        transitionAppearTimeout={700}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <Component {...props}/>
        </CSSTransitionGroup>
      )}/>
    )

    return(
      <div id="base">
        <Router>
          <Switch>
            <FadingRoute key = "default" exact path="/" component={Login} />
            <FadingRoute key="brandery" path="/brandery" component={BranderyView} />
            <FadingRoute key="company" path="/company" component={CompanyView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

//Send actions through middleware (the loginSaga)
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, sagaMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById("root")
);
