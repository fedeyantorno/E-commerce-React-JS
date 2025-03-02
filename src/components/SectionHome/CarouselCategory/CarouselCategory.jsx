import { useEffect, useState } from "react"
import { getCategory, getProducts, getSubCategory } from "../../../firebase/firebase"
import { Item } from "../Item/Item"
import "./CarouselCategory.css"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

export default function CarouselCategory( {category, subCategory, title} ) {

  const [products, setProducts] = useState([])

  const getData = async () => {
    const fn = category || subCategory ? (category ? () => getCategory(category) : getSubCategory(subCategory))  : () => getProducts();
    const products = await fn()
    setProducts(products)
  }

  useEffect(() => {
    getData()
  }, [category, subCategory])

  return (
    <>
     <div className="mt-3 swiper-container">   
    <hr/>
    <h4 className="pb-2 mt-5">{title} { category } { subCategory } </h4>
    <Swiper
    navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper "
      >
        {products &&
					products.map((product) => (
						<SwiperSlide key={product.id} className="card-carousel">
              <Item {...product} />
            </SwiperSlide>
					))}
      </Swiper>
      </div>   
    </>
  )
}
