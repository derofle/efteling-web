import React from 'react'
import { Link } from 'react-router-dom'

const AttractionSummary = ({stats,  info, type}) => {
  return (
      <div className="col s6">
        <div className="card hoverable">
        <div className="card-image">
        <img src={"https://www.efteling.com/nl" + info.fields.image_detailview1} alt={stats.Id}></img>
        <span className="card-title">{info.fields.name}</span>
        <Link to={'/'+ type +'/' + stats.Id} className="btn-floating halfway-fab waves-effect waves-light red">
        <i className="material-icons">add</i>
        </Link>
        </div>
        <div className="card-content grey-text text-darken-3">
        <p>{info.fields.subtitle}</p>
        <p>{ stats.WaitingTime || stats.WaitingTime === 0 ? "met een wachttijd van " + stats.WaitingTime + " minuten!" : "De attractie heeft geen wachtrij" }</p>
        <p>De attractie is op dit moment {stats.State}</p>
        </div>
    </div>
    </div>
  )
}

export default AttractionSummary