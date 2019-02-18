import React from 'react'
import ItemSummary from './ItemSummary'


const RandomItem = ({attractionData}) => {
        const filteredItemsOne = attractionData.filter(item => {
                return item.category === "attraction"
              })
              console.log(filteredItemsOne);
        const filteredItems = filteredItemsOne.filter(item => {
                return item.State === "open"
              })
              console.log(filteredItems);
        var randomItem = filteredItems[Math.floor(Math.random() * filteredItems.length)];
        console.log(randomItem);
        if (randomItem) {
        return (
                
                <ItemSummary attraction={randomItem}/> 
        )
        } else {
        return null;
        }
    
}

export default RandomItem