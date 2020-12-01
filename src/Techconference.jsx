import React from 'react';
import './Techconference.css';

const techConference =  (props)=>{
    return(
        <div  className='tech-conference' key={props.techConference.conference_id}>
            <div className = "heading">{props.techConference.confName}</div>
            <div><img src={props.techConference.imageURL}/></div>
            <div>Tech-Conference Starts On : {props.techConference.confStartDate}</div>
            <div>Tech-Conference Entry Type: {props.techConference.entryType}</div>
            <div> <a href={props.techConference.confUrl} target = "blank">Website Link</a> </div>

        </div>
   
    );
}
export default techConference;