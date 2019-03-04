import React, { Fragment } from 'react'
import WaitingTime from './specs/WaitingTime';
import Empire from './specs/Empire';


const ItemDetails = ({attractionData, match}) => {


      const singleItemArray = attractionData.filter(item => {
        return item.id === match.params.Id
      })

      let singleRiderArray;
      if (match.params.Id === "bobbaan"){
        singleRiderArray = attractionData.filter(item =>{
        return item.id === "bobsingleriders"
      })
    }

      if (match.params.Id === "symbolica"){
        singleRiderArray = attractionData.filter(item =>{
        return item.id === "symbolicasingleriders"
      })
    }
      if (match.params.Id === "baron1898"){
        singleRiderArray = attractionData.filter(item =>{
        return item.id === "baron1898singlerider"
      })
    }
    if (match.params.Id === "jorisendedraak"){
      singleRiderArray = attractionData.filter(item =>{
      return item.id === "jorisendedraaksinglerider"
    })
  }
  if (match.params.Id === "python"){
    singleRiderArray = attractionData.filter(item =>{
    return item.id === "pythonsinglerider"
  })
}

      let singleRider;
      if (singleRiderArray !== undefined) {
        singleRider = singleRiderArray[0]
      }
      const singleItem = singleItemArray[0];
      console.log(singleRider);

      return (
            <div className="container section project-details">
              <div className="row">
                <div className="col s8">
                  <div className="card">
                    <div className="card-image">
                      <img src={"https://www.efteling.com/nl" + singleItem.image_detailview1} alt=""/>
                      <span class="card-title">{singleItem.text}</span>
                    </div>
                    <div className="card-action grey lighten-4 grey-text" style={{ padding: "0px 24px"}}>
                      <div className="row">
                        <div className="col s6"></div>
                        <div className="col s6 right-align">
                          <Empire empire={singleItem.empire} />
                          </div>
                      </div>
                    </div>
                    <div className="card-content" style={{ "padding-top" : "0px" }}>
                      {singleItem.detail_text}
                    </div>
                  </div>
                </div>
                <div className="col s4">
                  <div className="card">   
                    <div className="card-content grey-text text-darken-3">
                      <span className="card-title">{singleItem.name}</span>
                      <span className="grey-text">{singleItem.subtitle}</span>
                      <div style={{ "padding-top": "10px" }}>
                      <WaitingTime WaitingTime={singleItem.WaitingTime}  state={singleItem.State}/>
                      {singleRider ? <div><p>Single Rider Wachtijd</p><WaitingTime WaitingTime={singleRider.WaitingTime} state={singleRider.State} /></div>: null }
                      </div>
                    </div>
                  </div>
                  <div className="card">   
                    <div className="card-content">
                    <div className="row">
                      {singleItem.type ? 
                        <Fragment>
                        <div className="col s6">Soort attractie:</div>
                        <div className="col s6">{singleItem.type}</div>
                        </Fragment>
                      : null}
                      {singleItem.builder ? 
                        <Fragment>
                        <div className="col s6">Bouwer(s):</div>
                        <div className="col s6">{singleItem.builder}</div>
                        </Fragment>
                      : null}
                      {singleItem.designer ? 
                        <Fragment>
                        <div className="col s6">Ontwerper:</div>
                        <div className="col s6">{singleItem.designer}</div>
                        </Fragment>
                      : null}
                      {singleItem.status ? 
                        <Fragment>
                        <div className="col s6">Status:</div>
                        <div className="col s6">{singleItem.status}</div>
                        </Fragment>
                       : null}
                      {singleItem.build ? 
                        <Fragment>
                        <div className="col s6">Bouw:</div>
                        <div className="col s6">{singleItem.build}</div>
                        </Fragment>
                      : null} 
                      {singleItem.opened ? 
                        <Fragment>
                        <div className="col s6">Opening:</div>
                        <div className="col s6">{singleItem.opened}</div>
                        </Fragment>
                      : null} 
                      {singleItem.cost ? 
                        <Fragment>
                        <div className="col s6">Kosten:</div>
                        <div className="col s6">{singleItem.cost}</div>
                        </Fragment>
                     : null} 
                     {singleItem.maxspeed ? 
                        <Fragment>
                        <div className="col s6">Maximale snelheid:</div>
                        <div className="col s6">{singleItem.maxspeed} km/u</div>
                        </Fragment>
                     : null} 
                     {singleItem.rideduration ? 
                        <Fragment>
                        <div className="col s6">Ritduur:</div>
                        <div className="col s6">{singleItem.rideduration}</div>
                        </Fragment>
                     : null} 
                     {singleItem.trains ? 
                        <Fragment>
                        <div className="col s6">Aantal voertuigen:</div>
                        <div className="col s6">{singleItem.trains}</div>
                        </Fragment>
                     : null} 
                     {singleItem.capacity ? 
                        <Fragment>
                        <div className="col s6">Capaciteit:</div>
                        <div className="col s6">{singleItem.capacity}</div>
                        </Fragment>
                     : null} 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
}      


export default ItemDetails;