import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavNar from './components/layout/NavBar'
import Dashboard from './components/dashboard/Dashboard'
import AttractionDetails from './components/attractions/AttractionDetails'

class App extends Component {
  state = {
    AttractionStats: [],
    AttractionStatsLoading: true,
    AttractionInfo: [],
    AttractionInfoLoading: true,
    loading: true,
  }

  componentDidUpdate() {
    if (this.state.AttractionStatsLoading === false && this.state.AttractionInfoLoading === false && this.state.loading !== false) {
      this.setState({
        loading: false
      })
      console.log(this.state);
    }
  }

  componentDidMount() {
    fetch('https://eftelingapi.herokuapp.com/attractions')
      .then(response => response.json())
      .then(data => this.setState({ AttractionStats : [...data.AttractionInfo], AttractionStatsLoading: false  }))
      .then(() => console.log(this.state))
      ;
      fetch('https://eftelingapi.herokuapp.com/poi')
      .then(response => response.json())
      .then(data => this.setState({ AttractionInfo : [...data.PoiInfo], AttractionInfoLoading: false  }))
      .then(() => console.log(this.state))
      ;
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
            <NavNar />
              <Switch>
              <Route 
                exact path='/'
                render={(props) => (
                  <Dashboard {...props} attractionStats={this.state.AttractionStats} attractionInfo={this.state.AttractionInfo} loading={this.state.loading}/>
                )}
                />
              <Route
                path='/attraction/:Id'
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