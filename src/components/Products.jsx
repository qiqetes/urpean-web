// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const products = [
    {
      name: "Gambas",
      image: "/p_1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Ostras",
      image: "/p_2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Bogavante",
      image: "/p_3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Almeja Cuchillo",
      image: "/p_4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Cigalas",
      image: "/p_5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Centollo",
      image: "/p_6.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const swiper = useRef(null);
  const [index, setIndex] = useState(0);

  const anchor = useRef(0);
  const [screenWidth, setScreenWidth] = useState(430);
  useEffect(() => {
    setScreenWidth();
    setInterval(() => {
      const productI = parseInt(location.href[location.href.length - 1], 10);
      if (isNaN(productI)) return;

      if (productI !== anchor) {
        if (anchor.current !== productI) {
          anchor.current = productI;
          console.log("PRODUCT", productI);
          swiper.current.slideTo(productI, 500, false);
          setIndex(swiper.current.progress * 5);
        }
      }
    }, 100);
  }, []);

  const [roundIndex, setRoundIndex] = useState(0);

  return (
    <div id="productos">
      <h1>Productos</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1.3}
        centeredSlides={true}
        height={500}
        onSlideChange={(swiper) => setRoundIndex(swiper.activeIndex)}
        onSwiper={(sw) => {
          swiper.current = sw;

          sw.on("setTranslate", function onSliderMove() {
            setIndex(swiper.current.progress * 5);
            console.log(((swiper.current.progress * 5) / 2.0) * 100);
          });
        }}
      >
        {products.map((prod, i) => (
          <SwiperSlide key={i} className="products">
            {/* random color for every slide */}
            <div className={`product ${roundIndex == i ? "current" : ""}`}>
              <div className="anchor" id={`product_${i}`} />
              <div className="fullW">
                <h5
                  style={{
                    transform: `translateX(${-(index - i) * 160}px)`,
                  }}
                >
                  {prod.name}
                </h5>
                {/* <p
                  style={{
                    transform: `translateX(${-(index - i) * 160}px)`,
                  }}
                >
                  {prod.description}
                </p> */}
              </div>
              <img src={prod.image} alt={prod.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
