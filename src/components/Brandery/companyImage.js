import React, {Component} from 'react';


class CompanyImage extends Component{
  render(){
    return(
      <li className="companyPic">
          <img src={this.props.url} alt="" />
      </li>
    );
  }
}

export default CompanyImage;
