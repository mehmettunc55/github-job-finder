import React from "react";
import './JobCard.css'

const JobCard = ({
    img, title, name, location, type, url
}) => {

    return(

        <div className="card">
            <div className="logo-div">
                <img className="company-logo" src={img} />
            </div>
            <div className="card-body">
                <div className="body-title">
                    {title}
                </div>
                <div className="body-desc">
                    {name} - {location}
                </div>
                <div className="body-type">
                    {type}
                </div>
                <a href={url} target="_blank"><button className="apply">APPLY</button></a>
            </div>
        </div>
    )

}
export default JobCard;