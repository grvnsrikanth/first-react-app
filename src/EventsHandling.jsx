import React from "react";

export default function EventHandling(){
    let SubmitT = ()=>{
        
alert("My React App");
    }

 

    return(

        <>
            <button className="btn btn-primary m-3"  onClick={SubmitT}>Submit</button>

        </>
    );
    
}