import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    appendDots: (dots) => (
      <div>
        <ul className="container mx-auto w-full text-start">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border-3 bg-white rounded-full !mt-10"></div>
    ),
  };
  return (
    <div className="h-screen w-full -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/bycase.jpg"
            alt=""
            priority
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <Slider {...settings}>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">
              Rəngli, Elastik, Etibarlı. By Case{" "}
            </Title>
            <p className="text-sm sm:w-2/5 w-full">
              Şık, dayanıqlı, münasib kabrolar. Qoruyucu, zərif və sərfəli.
              Rəngli, elastik, etibarlı. Yüksək keyfiyyət, uzunömürlü.
              Telefonunuzu qoruyun, gözəl saxlayın. Müxtəlif dizayn və rəng
              seçimləri. Rahat istifadə, yüngül çəkili. Telefonunuza yeni
              görünüş qazandırın.
            </p>

            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Qoruyucu, Zərif, Sərfəli.</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Qoruyucu, zərif, etibarlı kabrolar. Şık, uzunömürlü və sərfəli.
              Rəngli, elastik, keyfiyyətli. Telefonunuzu mühafizə edin, rahatlıq
              təmin edin. Gözəllik və təhlükəsizlik bir arada. Əla hədiyyə
              seçimi. Yüngül, asan istifadə. Telefonunuz həmişə yeni kimi
              qalsın.
            </p>

            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="mt-48 container mx-auto  text-white flex flex-col items-start gap-y-8">
            <Title addClass="text-5xl">Şık, Dayanıqlı, Münasib.</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Elastik, rəngli, dayanıqlı kabrolar. Münasib qiymət, yüksək
              keyfiyyət. Zərif və etibarlı dizayn. Telefonunuzu qoruyun, fərqli
              görünüş qazandırın. Canlı rənglər, solmayan naxışlar. Gündəlik
              istifadə üçün ideal. Hər model üçün uyğun. Müxtəlif zövqlərə uyğun
              seçimlər.
            </p>

            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
