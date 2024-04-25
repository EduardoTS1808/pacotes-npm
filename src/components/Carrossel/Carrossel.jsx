import React from "react";
import Slider from "react-slick";
  import {Container, Image} from 'react-bootstrap';




function CenterMode() {
  
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
       
<>
<Container fluid="md">
    <div className="slider-container">

      <Slider  {...settings} >
          <Image src="../../imagens/img-2.jpg"  />
          <Image src="../../imagens/img-3.jpg"  />
          <Image src="../../imagens/img-4.jpg"  />
          <Image src="../../imagens/img-6.jpg"  />
          <Image src="../../imagens/img-7.jpg"  />
        </Slider>
    </div>
        </Container>
  </>



  );
}

export default CenterMode;
