import React from 'react'
import { Link } from 'react-router-dom'

import WaitingTime from './specs/WaitingTime';

const ItemSummary = ({attraction}) => {
  return (
        <div className="card hoverable">
        <div className="card-image">
        <img src={"https://www.efteling.com/nl" + attraction.image_detailview1} alt={attraction.Id}></img>
        <Link to={'/'+ attraction.category +'/' + attraction.Id} className="btn-floating halfway-fab waves-effect waves-light white ">
        <i className="material-icons" style={{ color: "black" }}>add</i>
        </Link>
        </div>
        <div className="card-content grey-text text-darken-3 center-align" style={{ "padding-top": "16px" }}>
        <span className="card-title">{attraction.name}</span>
        <div style={{ "padding-bottom": "10px" }}>
        <p>{attraction.subtitle}</p>
        </div>
        <WaitingTime WaitingTime={attraction.WaitingTime} state={attraction.State}/>
        </div>
    </div>
  )
}

export default ItemSummary