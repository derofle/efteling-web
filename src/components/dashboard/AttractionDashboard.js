import React, { Component } from 'react'
import AttractionList from '../attractions/AttractionList';

class AttractionDashboard extends Component {
  render() {  
    if (!this.props.loading) {
      return (
        <div className="dashboard container">
              <AttractionList stats={this.props.stats} info={this.props.info} type="Attraction"/>     
        </div>
      )
    } else{ 
        return (
            null
        )
    }
  }
}

export default AttractionDashboard;
