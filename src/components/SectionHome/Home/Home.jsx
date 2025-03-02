import Carousel from "../Carousel/Carousel";
import CarouselCategory from "../CarouselCategory/CarouselCategory";

export default function Home() {
  return (
    <>
    <h2 className="pb-4 text-center">Bienvenidos a Cuisine Bazar</h2>
      
    <Carousel />
    <CarouselCategory title= "Productos" category= "Deco" />
    <CarouselCategory title= "Productos" category= "Cocina" />
    <CarouselCategory title= "Productos" category= "Vajilla" />

    </>
  )
}
