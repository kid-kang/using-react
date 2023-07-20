// icons图标及应的网址
export const iconList = [
  { href: "https://github.com/kid-kang", path: "/src/assets/github.svg" },
  { href: "https://juejin.cn/user/2560140128290397", path: "/src/assets/juejin.svg" },
  { href: "https://wangzhengkang.cool/#/", path: "/src/assets/blog.svg" },
  { href: "#1356422517", path: "/src/assets/QQ.svg" },
  { href: "#18720442933", path: "/src/assets/weixin.svg" },
];

// 技术熟练度节点遍历
export const skillList = [
  { href: "https://img1.baidu.com/it/u=296428137,2086476479&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500", percentage: "80" },
  { href: "https://img2.baidu.com/it/u=1924821245,3807842997&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500", percentage: "80" },
  { href: "https://img2.baidu.com/it/u=1856841592,54818517&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=360", percentage: "80" },
  { href: "https://img2.baidu.com/it/u=1079899123,2089128826&fm=253&fmt=auto&app=138&f=PNG?w=520&h=500", percentage: "50" },
];

// 轮播图按钮 及 对应展示的截图
function creatImgUrlList(group: number, total: number) {
  const urlArr = [];
  for (let i = 1; i <= total; i++) {
    urlArr.push(`/src/assets/${group}${i}.png`);
  }
  return urlArr;
}

export const swiperList = [
  {
    btnName: "博客分享平台",
    homeImgUrlList: ["/src/assets/11.png", "/src/assets/12.png", "/src/assets/13.png"],
    worksImgUrlList: creatImgUrlList(1, 7),
    width: "75%",
  },
  {
    btnName: "音乐小程序",
    homeImgUrlList: ["/src/assets/2a.png", "/src/assets/2b.png", "/src/assets/2c.png"],
    worksImgUrlList: creatImgUrlList(2, 6),
    width: "25%",
  },
  {
    btnName: "飞机大战",
    homeImgUrlList: ["/src/assets/31.png", "/src/assets/32.png", "/src/assets/33.png"],
    worksImgUrlList: creatImgUrlList(3, 3),
    width: "75%",
  },
];
