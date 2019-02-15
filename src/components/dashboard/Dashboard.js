import React, { Component } from 'react'
import AttractionList from '../attractions/AttractionList';

class Dashboard extends Component {
  render() {  
    if (!this.props.loading) {
    return (
      <div className="dashboard container">
                <AttractionList attractionStats={this.props.attractionStats} attractionInfo={this.props.attractionInfo}/>     
    </div>
    )
    } else{ 
        return (
            null
        )
    }
  }
}

export default Dashboard;
