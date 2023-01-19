import React from 'react'
import img3 from '../photos/3.jpg'
import img4 from '../photos/4.jpg'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default function Services() {
    return (

        <div className='Services'>
            <Carousel>
                <div>
                    <img src={img3} alt="img3" />
                    <p className='legend'>Full Stack</p>
                </div>
                <div>
                    <img src={img4} alt="img4" />
                    <p className='legend'>Full Stack</p>
                </div>
            </Carousel>
        </div>

    )
}
