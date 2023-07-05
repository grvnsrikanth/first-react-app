import React, { useState } from "react";

export default function About(){

  const [cont,upcont]=useState(0);

  const Incement=()=>{
    upcont(cont+1);
  }
  const Decement=()=>{
 if( cont>0){
      upcont(cont-1);
    }

  }

    return(

        <>
      {/*  <div className="container">
        <div className="row">
       <div className="col-lg-12">
        <div className="content">
          <h2 className="mt-2">About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, urna in aliquam porta, ipsum
            mauris pretium lectus, in fermentum tellus turpis ac lorem.</p>
        </div>
        </div>
        </div> */}
    {/* <div className="row">
      <div className="col-lg-6">
        <div className="content">
          <h2>Column 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, urna in aliquam porta, ipsum
            mauris pretium lectus, in fermentum tellus turpis ac lorem.</p>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="content">
          <h2>Column 2</h2>
          <p>Nullam vel semper felis. Maecenas posuere convallis tellus eget interdum. Vestibulum fringilla, ligula eu
            tincidunt congue, leo dolor scelerisque odio, vitae tincidunt tellus turpis eget ex.</p>
        </div>
      </div>
    </div>
  </div> */}

  <h2 className="text-center mt-5">Current Count</h2>
  <h3 className="text-center mt-3 mb-3">{cont}</h3>
  <h1 className="text-center mb-5">
  <button onClick={Incement} className="btn btn-primary mx-2">Incement</button>
  <button onClick={Decement} className="btn btn-primary">Decement</button>
  </h1>
        </>
    )
}