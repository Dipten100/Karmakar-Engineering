import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const MainCarousel = ({images}) => {
    const [Index, setIndex] = useState(0)

    const handleSelect=(selectIndex)=>{
        setIndex(selectIndex)
    }

  return (
    <Carousel activeIndex={Index} onSelect={handleSelect}>
        {
            images.map((item,i)=>(
                <Carousel.Item key={i}>
                    <img src={`../src/assets/images/homeCarouselImage/${item}`} className='img-fluid equal-images' alt={item} />
                </Carousel.Item>
            ))
        }
    </Carousel>
  )
}

export default MainCarousel