import React from 'react'
import AttractionSummary from './AttractionSummary'


const AttractionList = ({stats, info, type}) => {
        return (   
            <div className="row">
            { stats && stats.map(attraction => {
                if (attraction.Type === type && attraction.Id !== "virtueledroomvlucht") {
                const singleInfo = info.find(a => a.fields.id === attraction.Id);
                if (singleInfo){
                return (
                        <AttractionSummary stats={attraction} key={attraction.Id} info={singleInfo} type={type}/>
                )
                }
                } return null;
            })}  
            </div>
            
        )
    
}

export default AttractionList