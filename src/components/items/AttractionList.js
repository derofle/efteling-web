import React from 'react'
import ItemSummary from './ItemSummary'


const ItemList = ({stats, info, type}) => {
        return (   
            <div className="row">
            { stats && stats.map(attraction => {
                if (attraction.Type === type && attraction.Id !== "virtueledroomvlucht") {
                const singleInfo = info.find(a => a.fields.id === attraction.Id);
                if (singleInfo){
                return (
                        <ItemSummary stats={attraction} key={attraction.Id} info={singleInfo} type={type}/>
                )
                }
                } return null;
            })}  
            </div>
            
        )
    
}

export default ItemList