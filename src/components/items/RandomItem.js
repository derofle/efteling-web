import React from 'react'
import ItemSummary from './ItemSummary'


const RandomItem = ({attractionData}) => {
        const filteredItemsOne = attractionData.filter(item => {
                return item.category === "attraction"
              })
        const filteredItems = filteredItemsOne.filter(item => {
                return item.State === "open"
              })
        var randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
        return (
                <ItemSummary attraction={randomItem}/> 
        )
    
}

export default RandomItem