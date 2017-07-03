import React, {Component} from 'react';

//Click on the image to scroll to respective metrics on page.
class CompanyImage extends Component{
  constructor(props){
    super(props);
    this.goToCompany = this.goToCompany.bind(this);
  }

  goToCompany(event){
    let name = event.target.name;
    name = name.replace(/[^A-Z0-9]+/ig, '');
    let element = document.getElementById(name).getBoundingClientRect();
    //implementing a smooth scroll to the selected element in DOM.
    let pos = window.scrollY;
    let id = setInterval(frame, 100);
    let tick = 0;
    function frame() {
      if (pos >= element.top -50) {
        //we've arrived at element. stop the scroll
        clearInterval(id);
      }else if(tick < 3){
        /*imitating an ease. first 3 ticks are slower than the rest,
          so we clear the slower interval and restart at a faster one
        */
        clearInterval(id);
        id = setInterval(frame, 10);
        tick++;
      }else {
        if(element.top > 200){
          //scrolling to elements that are farther down the page faster.
          pos+=50;
        }
        pos+=50;
        tick++;
        window.scrollTo(0, pos);
      }
    }
  }

  render(){
    return(
      <li className="companyPic">
        <img src={this.props.url} name={this.props.name} alt="" onClick={this.goToCompany}/>
      </li>
    );
  }
}

export default CompanyImage;
