import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import CompanyView from './components/Company/companyView.js';
import BranderyView from './components/Brandery/branderyView.js';
import Login from './components/Login/login.js';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);//gets properties that are from components. passes vars, etc
    this.currentcompanies = {
      Gainful : {
        name : "Gainful",
        image : "images/gainful.png"
      },
      Consultmates : {
        name : "Consultmates",
        image : "images/consultmates.png"
      },
      SoapySoapCo : {
        name : "Soapy Soap Co.",
        image : "images/soapysoap.png"
      },
      TameTheBeast : {
        name : "Tame The Beast",
        image : "images/tamethebeast.png"
      },
      JumperThreads : {
        name : "Jumper Threads",
        image : "images/jumperthreads.png"
      },
      Obe : {
        name : "Obe Pet Products",
        image : "images/obe.png"
      },
      RetargetLinks : {
        name : "Retarget Links",
        image : "images/retarget.png"
      }
    }
  }

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

ReactDOM.render(
  <App />, document.getElementById("root")
);
