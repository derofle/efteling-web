import React, { Component } from 'react'
import RandomItem from '../items/RandomItem';

class Dashboard extends Component {

  componentDidMount() {
    
  }

  render() {  
    if (!this.props.loading){
      
      const attractionData = this.props.attractionData;
      console.log(attractionData);

      return (
        <div className="container">
          <div className="row "></div>
            <div className="row ">
            <div className="col s8">
            <div className="card">
              <div className="card-content">
            </div>
          </div>
          </div>
          <div className="col s4">
            <div className="card">
              <div className="card-content">
                <span className="card-title center-align" style={{ "padding-bottom":"8px" }}>Ben je hier al geweest?</span>
                <RandomItem attractionData={attractionData} />
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
