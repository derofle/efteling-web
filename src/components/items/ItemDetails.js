import React from 'react'
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

      let singleRider;
      if (singleRiderArray !== undefined) {
        singleRider = singleRiderArray[0]
      }
      const singleItem = singleItemArray[0];
      console.log(singleItem, singleRider);

      return (
            <div className="container section project-details">
              <div className="row">
                <div className="col s8">
                  <div className="card">
                    <div className="card-image">
                      <img src={"https://www.efteling.com/nl" + singleItem.image_detailview1} alt=""/>
                    </div>
                    <div className="card-action grey lighten-4 grey-text" style={{ padding: "0px 24px"}}>
                      <div className="row">
                        <div className="col s6"></div>
                        <div className="col s6 right-align">
                          <Empire empire={singleItem.empire} />
                          </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div></div>
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
                      {singleRider ? <div><p>Single Rider Wachtijd</p><WaitingTime WaitingTime={singleRider.WaitingTime} /></div>: null }
                      </div>
                    </div>
                  </div>
                  <div className="card">   
                    <div className="card-content">
                      <p>{singleItem.detail_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
}      


export default ItemDetails;