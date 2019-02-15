import React, { Component } from 'react'

class Dashboard extends Component {

  compare = (a, b) => {
    if (a.Type < b.Type)
      return -1;
    if (a.Type > b.Type)
      return 1;
    return 0;
  }


  render() {  
    const array = this.props.stats;
    array.sort(this.compare)
    if (!this.props.loading) {
    return (
      <div className="container">
      <table>
                
      <tbody>
      <tr>
                   <td>ID</td>
                   <td>Type</td>
                   <td>Map Location</td>
                   <td>State</td>
                   <td>StateColor</td>
                 </tr>
        {array.map(function(item, key) {
             
               return (
                
                  <tr key = {key}>
                      <td>{item.Id}</td>
                      <td>{item.Type}</td>
                      <td>{item.MapLocation}</td>
                      <td>{item.State}</td>
                      <td>{item.StateColor}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
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
