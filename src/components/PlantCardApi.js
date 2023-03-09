import React from 'react'

const PlantCardApi = ( { id, common_name, scientific_name, cycle, watering, sunlight, default_image }) => {

    return (
        <>
            <div className="plant-box">
                <p> {id} </p>
                <p className="common-name"><u>Common Name:</u> {common_name}</p>
                <p className="scientific-name"><u>Scientific Name:</u> {scientific_name}</p>
                <p className="cycle"><u>Grow Cycle:</u> {cycle}</p>
                <p className="watering"><u>Watering Requirements:</u> {watering}</p>
                <p className="sunlight"><u>Sunlight Requirements:</u> {sunlight}</p>
                <img className="plant-image" src={default_image?.original_url} alt={""}></img>
            </div>
        </>
    )

}

export default PlantCardApi