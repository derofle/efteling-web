import React from 'react';

const Empire = ({empire}) => {
    let color;
    if (empire === "Marerijk") {
        color = "teal darken-2"
    }
    if (empire === "Fantasierijk") {
        color = "purple darken-2"
    }
    if (empire === "Ruigrijk") {
        color = "red darken-2"
    }
    if (empire === "Anderrijk") {
        color = "cyan darken-2"
    }
    if (empire === "Reizenrijk") {
        color = "orange darken-1"
    }
    return (
         <p className={"white-text center-align btn " + color}>{empire}</p>
    )
}

export default Empire;