import React from 'react'
import AttractionSummary from './AttractionSummary'


const AttractionList = ({attractionStats, attractionInfo}) => {

        return (   
            <div className="row">
            { attractionStats && attractionStats.map(attraction => {
                if (attraction.Type === "Attraction" && attraction.Id !== "virtueledroomvlucht") {
                const info = attractionInfo.find(a => a.fields.id === attraction.Id);
                if (info){
                return (
                        <AttractionSummary stats={attraction} key={attraction.Id} info={info}/>
                )
                }
                } return null;
            })}  
            </div>
            
        )
    
}

export default AttractionList