import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import AttractionDetails from './components/items/ItemDetails'

// JSON
import PoiRaw from './data/newpoi'


 



class App extends Component {
  
  state = {
    attractionData: [],
    metaData: [],
    loading: true,
  }

  componentDidMount() {
    let ApiData = [];
    let MetaData = [];
    const PoiData = PoiRaw.PoiInfo;
    let newData = [];

    fetch('https://eftelingapi.herokuapp.com/attractions')
      .then(response => response.json())
      .then((data) => {
        ApiData = data.AttractionInfo;
      })
      .then (() => {
        newData = PoiData.map(itm => 
        ({ ...ApiData.find((item) =>
        (item.Id === itm.id) && item), ...itm }));
        
      })
      .then(() => {
        fetch('https://eftelingapi.herokuapp.com/metadata')
        .then(response => response.json())
        .then((data) => {
          MetaData = data.OpeningHours;
        })
        .then (() => {
          this.setState({
            attractionData: newData,
            metaData: MetaData,
            loading: false
          })
        })
        
      })
      
      .catch((err) => console.log("Gathering Realtime Data failed: " + err));
      
  };

  render() {
    if (this.state.loading) {
      return (
        <p>Loading data..</p>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="App">
            <NavBar metaData={this.state.metaData}/>
              <Switch>
              <Route 
                exact path='/'
                render={(props) => (
                  <Dashboard {...props} attractionData={this.state.attractionData} loading={this.state.loading}/>
                )}
                />
                />
              <Route
                path='/attraction/:Id'
                render={(props) => (
                  <AttractionDetails {...props} attractionData={this.state.attractionData} loading={this.state.loading}/>
                )}
                />
              <Route
                path='/show/:Id'
                render={(props) => (
                  <AttractionDetails {...props} attractionStats={this.state.AttractionStats} attractionInfo={this.state.AttractionInfo} loading={this.state.loading}/>
                )}
                />
              </Switch>
          </div>
        </BrowserRouter>
      )
    }
  }
}


export default App;