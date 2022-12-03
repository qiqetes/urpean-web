// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const products = [
    {
      name: "Product 1",
      image: "https://picsum.photos/300/300",
    },
    {
      name: "Product 2",
      image: "https://picsum.photos/300/300",
    },
    {
      name: "Product 3",
      image: "https://picsum.photos/300/300",
    },
    {
      name: "Product 4",
      image: "https://picsum.photos/300/300",
    },
    {
      name: "Product 5",
      image: "https://picsum.photos/300/300",
    },
    {
      name: "Product 6",
      image: "https://picsum.photos/300/300",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    console.log(swiper?.realIndex);
  }, [swiper?.realIndex]);

  return (
    <>
      <h1>Productos</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1.3}
        centeredSlides={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(sw) => setSwiper(sw)}
        touchMove={(i) => console.log("scroll", i)}
      >
        {products.map((prod, i) => (
          <SwiperSlide key={i}>
            {/* random color for every slide */}
            <div
              className="product"
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            >
              <div className="fullW">
                <h5>{prod.name}</h5>
              </div>
              <img src={prod.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
