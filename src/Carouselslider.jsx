import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from './carousel-image-1.jpg'
import banner2 from './carousel-image-2.jpg'
import banner3 from './carousel-image-3.jpg'




export default function Carouseslider(){

    return(
        <>
         <div className='container-fluid'>
            <div className="row">
                <div className="col-lg-12" >
              <Carousel  autoPlay showArrows={true} showThumbs={false} dynamicHeight={true} >
      <div>
        <img src={banner1}  style={{ width: '100%', height: '600px' }} alt="F slide" />
       
      </div>
      <div>
        <img src={banner2} alt="Second slide" style={{ width: '100%', height: '600px' }} />
      
      </div>
      <div>
        <img src={banner3} alt="Second slide" style={{ width: '100%', height: '600px' }} />
       
      </div>
      {/* Add more slides as necessary */}
    </Carousel>
    </div></div></div>

    
        </>
    )
}