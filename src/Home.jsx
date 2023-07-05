import React from "react";
import Carouseslider from "./Carouselslider";
import Homefeat from "./Homefeat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventHandling from "./EventsHandling";

export default function Home(){
    return(
        <>
        <EventHandling/>
 <Carouseslider/>
 <Homefeat/>         
        </>
    )
}