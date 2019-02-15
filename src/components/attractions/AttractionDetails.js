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
            <div className="card z-depth-0">
              <div className="card-content">
                <img src={"https://www.efteling.com/nl" + this.state.info.fields.image_detailview1} alt=""/>
                <span className="card-title">{this.state.info.fields.name}</span>
                <span className="grey-text">{this.state.info.fields.subtitle}</span>
                <div dangerouslySetInnerHTML={this.createMarkup(this.state.contentText)}></div>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Wachtijd is {this.state.stats.WaitingTime} minuten.</div>
                <div>{this.state.info.fields.empire}</div>
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