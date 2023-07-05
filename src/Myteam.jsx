import React from "react";
import contacts from "./contacts";
import { json } from "react-router";
import Gallery from "./Gallery";

export default function Myteam(){
  let myTeam =  contacts.map((user)=>{
return <div className="col-lg-4"><div className="card mt-2 mb-2">
<img className="card-img-top" src={user.imgURL} alt="Card image" />
<div className="card-body">
  <h4 className="card-title">{user.name}</h4>
  <p className="card-text">{user.phone}</p>
  <a href="#" className="btn btn-primary">See Profile</a>
</div>
</div></div>

    })
   
    // fetch('https://jsonplaceholder.typicode.com/photos')
    // .then(response => response.json())
    // .then(json => console.log(json))
    
   

    return(
        <>
         <div className="container mt-2">
        <div className="row">
   
{myTeam}

</div></div>
</>
    )
}