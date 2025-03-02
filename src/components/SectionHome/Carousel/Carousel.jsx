// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Carousel() {

  return (
    <>
    <div className="carousel-inner">
     <Swiper spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper swiper-container">
        <SwiperSlide><img src="img-carousel/carousel-1.jpeg" className="d-block w-100" alt="Productos de bazar"/></SwiperSlide>
        <SwiperSlide><img src="img-carousel/carousel-2.jpeg" className="d-block w-100" alt="Productos de bazar"/></SwiperSlide>
        <SwiperSlide><img src="img-carousel/carousel-3.jpeg" className="d-block w-100" alt="Productos de bazar"/></SwiperSlide>
      </Swiper>      
    </div>
    {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img-carousel/carousel-1.jpeg" className="d-block w-100" alt="Productos de bazar"/>
          </div>
          <div className="carousel-item">
            <img src="img-carousel/carousel-2.jpeg" className="d-block w-100" alt="Productos de bazar"/>
          </div>
          <div className="carousel-item">
            <img src="img-carousel/carousel-3.jpeg" className="d-block w-100" alt="Productos de bazar"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
    </div> */}
    </>
  )
}
