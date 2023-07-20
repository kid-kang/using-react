import Banner from "../../components/Banner";
import { skillList } from "../../service";
import "./index.less";

export default function MyInfo() {
  return (
    <div className="myinfo__wrap">
      <Banner title="个人信息" />

      <div className="skill__wrap">
        <p className="title">掌握技能</p>
        <p className="text">对前端保持好奇心、目的和激情，始终如一</p>
        <ul>
          {skillList.map((val) => (
            <li key={val.href}>
              <img src={val.href} alt="skill-logo" />
              <span>熟悉度：{val.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="self__assess">
        <div className="text__box">
          <p className="title">关于我</p>
          <p className="sign">对前端保持好奇心、目的和激情，始终如一</p>
          <p>
            小王-前端工程师，精通 Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载，精通
            CSS、JavaScript、PHP、ASP、C、C++、C#、Java、Ruby、Perl、Lisp、Python、Objective-C、ActionScript、Pascal 等单词的拼写，熟悉 Windows、Linux、OS X、Android、iOS、WP8
            等系统的开关机。并持续学习前端开发，立志成为优秀的前端开发工程师~做个终身学习者。
          </p>
          <p>帅气这个形容词，大概就是为我而创造的吧😏</p>
          <p>有必要强调一下！我还没有脱发！大概是写的代码还不够多...</p>
        </div>
        <img src="/src/assets/666.png" alt="自我评价" />
      </div>
    </div>
  );
}
