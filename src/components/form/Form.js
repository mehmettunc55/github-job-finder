import React from "react";
import './Form.css'

function Form() {
  return (
    <div>
      <div className="form">
      <p>GITHUB JOB FINDER</p>
        <input type="text" placeholder="DESCRIPTION" className='description'/>
        <input type="text" placeholder="LOCATION" className='location'/>
        <button className='search'>SEARCH</button>
      </div>
    </div>
  );
}

export default Form;
