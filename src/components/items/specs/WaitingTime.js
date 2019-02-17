import React from 'react';

const WaitingTime = ({WaitingTime, state}) => {
    let color;
    if (WaitingTime <= 30) {
        color = "green darken-1"
    }
    if (WaitingTime >= 30) {
        color = "amber darken-1"
    }
    if (WaitingTime >= 60) {
        color = "red darken-1"
    }
    if (state === "inonderhoud") {
        color = "grey darken-1"
    }
    return (
         <p className= {color + " white-text center-align btn"} style={{ cursor: "default", "box-shadow": "none" }}>
             { WaitingTime || WaitingTime === 0 ? "±" + WaitingTime + " min wachten" : null }
             { state === "inonderhoud" ? "In onderhoud" : null }
        </p>
    )
}

export default WaitingTime;