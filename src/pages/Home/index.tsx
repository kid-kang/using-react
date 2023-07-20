import { Carousel, Button } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { useState, useRef } from "react";
import { iconList, skillList, swiperList } from "../../service";
import "./index.less";

export default function Home() {
  const [swiperBtn, setSwiperBtn] = useState<number>(0);
  const carouselRef = useRef<CarouselRef>(null);

  function changeSwiperBtn(n: number): void {
    if (n === swiperBtn) return;
    setSwiperBtn(n);
    carouselRef.current!.goTo(n);
  }

  const setActiveBtn = (n: number): string => (swiperBtn === n ? "active" : "");

  return (
    <div className="home-wrap">
      {/* 轮播图 */}
      <Carousel autoplay className="carousel-wrap">
        <div className="carousel-item">
          <img src="https://img2.baidu.com/it/u=216125421,389954662&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="banner" />
          <div className="carousel-item__text1 common">
            <div className="text-left">Hey.</div>
            <div className="text-right">
              <p>我是一名程序猿.</p>
              <p>一名前端工程师.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://img1.baidu.com/it/u=2691870861,3862867726&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="banner" />
          <div className="carousel-item__text2 common">
            <p>
              FRONT-END <span>Engineer</span>
            </p>
          </div>
        </div>
      </Carousel>
      {/* 座右铭 */}
      <div className="welcome-wrap">
        <div className="welcome-text">WELCOME</div>
        <div className="my-sign">
          <p>我的座右铭</p>
          <p>对前端保持好奇心、目的和激情，始终如一</p>
        </div>
        <div className="welcome-btn">
          <Button shape="round">MORE</Button>
        </div>
      </div>
      {/* 基本信息 */}
      <div className="base-info__wrap">
        <img className="portrait" src="/src/assets/1.svg" alt="肖像" />

        <div className="msg-box">
          <div className="job">前端工程师</div>
          <div className="name">Mr.WANG</div>
          <p>有必要强调一下！我还没有脱发！大概是写的代码还不够多......</p>
          <ul>
            <li>
              <span></span>来自：江西上饶
            </li>
            <li>
              <span></span>学历：本科
            </li>
            <li>
              <span></span>爱好：足球
            </li>
          </ul>

          <div className="icon-list">
            {iconList.map((val, index) => (
              <a href={val.href} target="new_blank" key={index}>
                <img src={val.path} alt="icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* 掌握技能 */}
      <div className="skill__wrap">
        <p className="title">掌握技能</p>
        <p className="text">对前端保持好奇心、目的和激情，始终如一</p>
        <ul>
          {skillList.map((val, index) => (
            <li key={index}>
              <img src={val.href} alt="skill-logo" />
              <span>熟悉度：{val.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
      {/* 个人作品 */}
      <div className="works__wrap">
        <p className="title">个人作品展示</p>
        <p className="text">对前端保持好奇心、目的和激情，始终如一</p>
        <div className="swiper__btn">
          {swiperList.map((val, index) => (
            <span className={setActiveBtn(index)} onClick={() => changeSwiperBtn(index)} key={index}>
              {val.btnName}
            </span>
          ))}
        </div>
        <div className="swiper__wrap">
          <Carousel dots={false} ref={carouselRef}>
            {swiperList.map((val) => (
              <div className="swiper__item" key={val.btnName}>
                {val.homeImgUrlList.map((url) => (
                  <img src={url} alt="展示截图" key={url} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* 欢迎交流 */}
      <div className="talk__wrap">
        <p className="title">欢迎更多小伙伴与我交流</p>
        <p className="text">对前端保持好奇心、目的和激情，始终如一</p>
        <img src="https://25443413.s61i.faiusr.com/4/AD0I1fiQDBAEGAAgl62V-AUonN_p3AEwtQQ49QI.png.webp" alt="友好交流" />
      </div>
    </div>
  );
}
