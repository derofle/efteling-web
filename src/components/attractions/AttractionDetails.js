import React, { Component } from 'react'


class AttractionDetails extends Component  {
  state = {
    stats : {},
    info: {},
    contentText: '',
    loading: true
  }

  componentDidMount = () => {
    if (!this.props.loading && this.state.loading) {
      const statsArray = this.props.attractionStats;
      const infoArray = this.props.attractionInfo;
      const stats = statsArray.find(a => a.Id === this.props.match.params.Id);
      const info = infoArray.find(a => a.fields.id === this.props.match.params.Id);
      this.setState({
        stats: stats,
        info: info,
        contentText: info.fields.detail_text,
        loading: false
      })
      
    }
  }

  createMarkup = (target) => {
    return {__html: target};
  }

  render() {
      if (!this.state.loading) {
        return (
          <div className="container section project-details">
            <div className="row">
              <div className="col s8">
                <div className="card">
                  <div className="card-image">
                    <img src={"https://www.efteling.com/nl" + this.state.info.fields.image_detailview1} alt=""/>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div className="row">
                      <div className="col s6">{ this.state.stats.WaitingTime || this.state.stats.WaitingTime === 0 ? "met een wachttijd van " + this.state.stats.WaitingTime + " minuten!" : null }</div>
                      <div className="col s6 right-align">{this.state.info.fields.empire}</div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div dangerouslySetInnerHTML={this.createMarkup(this.state.contentText)}></div>
                  </div>
                </div>
              </div>
              <div className="col s4">
                <div className="card">   
                  <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{this.state.info.fields.name}</span>
                    <span className="grey-text">{this.state.info.fields.subtitle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="container center">
            <p>Loading attraction...</p>
          </div>
        )
      }
    }
  }

export default AttractionDetails;