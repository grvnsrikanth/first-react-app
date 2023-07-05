import React from "react";
import Nav from "./Nav";

export default function Header(){

return(
    <>
      <header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="container">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <Nav/>
    </div>
  </nav>
</header>

    </>
)

}