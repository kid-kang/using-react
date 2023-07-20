import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import Banner from "../../components/Banner";
import { useState, useRef } from "react";
import { swiperList } from "../../service";
import "./index.less";

export default function Works() {
  const [swiperBtn, setSwiperBtn] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);
  function changeSwiperBtn(n: number): void {
    if (n === swiperBtn) return;
    setSwiperBtn(n);
    carouselRef.current!.goTo(n);
  }
  return (
    <div className="works__wrap">
      <Banner title="作品介绍" />

      <div className="works">
        <p className="title">更多个人作品展示</p>
        <p className="text">对前端保持好奇心、目的和激情，始终如一</p>
        <div className="swiper__btn">
          {swiperList.map((val, index) => (
            <span className={swiperBtn === index ? "active" : ""} onClick={() => changeSwiperBtn(index)} key={index}>
              {val.btnName}
            </span>
          ))}
        </div>
        <div className="swiper__wrap">
          <Carousel dots={false} ref={carouselRef}>
            {swiperList.map((val) => (
              <div className="swiper__item" key={val.btnName}>
                {val.worksImgUrlList.map((url) => (
                  <img style={{ width: val.width }} src={url} alt="展示截图" key={url} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
