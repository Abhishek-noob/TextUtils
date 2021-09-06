import React from 'react'

export default function About(props) {
    return (
        <div className="container">
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About us
      </button>
    </h2>
    <div className={`text-${props.mode==='light'?'dark':'white'}`} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>This is a simple site where you can perform various operations on a text</p>
      </div>
    </div>
    </div>
  </div>
  
</div>
        </div>
    )
}
