import React from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
   
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div class="justify-center m-auto p-6">
      <Slider {...settings}>
        <div>
          <img   class="min-w-fit m-2 p-6" src="../../imagens/img-1.jpg" alt="img-slider" />
        </div>
        <div>
          <img  class="min-w-fit m-2 p-6" src="../../imagens/img-2.jpg" alt="img-slider" />
        </div>
        <div>
          <img class="min-w-fit m-2 p-6" src="../../imagens/img-3.jpg" alt="img-slider" />
        </div>
        <div>
          <img class="min-w-fit m-2 p-6" src="../../imagens/img-4.jpg" alt="img-slider" />
        </div>
        <div>
          <img class="min-w-fit m-2 p-6" src="../../imagens/img-5.jpg" alt="img-slider" />
        </div>
        <div>
          <img class="min-w-fit m-2 p-6" src="../../imagens/img-6.jpg" alt="img-slider" />
        </div>
        <div>
          <img class="min-w-fit m-2 p-6" src="../../imagens/img-7.jpg" alt="img-slider" />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
