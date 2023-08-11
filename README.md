# starcharge-daily
> 在星星充电的日子 - 记录学到了什么 - 每次进步一点点

## 2023年

| 日期 |                                                              |
| :--: | ------------------------------------------------------------ |
| 7.10 | umijs是可扩展的企业级前端应用框架，比 Vite 还快的 Webpack 打包方案MFSU，基于 React Router 6 的完备路由<br />通过tailwind.config.js可以进行自定义主题配置 |
| 7.11 | 公司BEM规范举例：page__btn--prev                             |
| 7.12 | reactRouter的基础使用，并做好笔记                            |
| 7.18 | umi-request 的使用 （基于fetch请求）[umijs](https://v2.umijs.org/zh/guide/router.html) |
| 7.19 | 学习使用antd的table组件和pro-table                           |
| 7.24 | 以后使用开发文档得先看版本是否一致（产品中心项目antd版本）   |
| 8.7  | `import`命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。<br />导入的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。<br />`import`命令是编译阶段执行的，在代码运行之前。 |
| 8.8  | 我尝试将 state 设置为一个函数，但它却被调用了，要实际 **存储** 一个函数，你必须在两种情况下在它们之前加上 `() =>`。然后 React 将存储你传递的函数。 |
| 8.9  | useCallback(fn，[yilai]) 钩子的作用，缓存函数，让其不重新定义 |
| 8.10 | Nest.js是用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架。<br />ssr的存在的问题：额外的错误实时监控，没有加载完js之前用户会无法交互，不容易切分预加载数据和异步加载数据 |
| 8.11 | 一键复制功能：<br />navigator.cilpboard.writeText('text') // 作为document.execCommand("copy")的替代品，只适用于https<br /> |
| 8.12 |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |
|      |                                                              |

## 优雅永不过时

```jsx
import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';
import Tab1 from './components/tab1';
import Tab2 from './components/tab2';
import Tab3 from './components/tab3';
import Tab4 from './components/tab4';
import Tab5 from './components/tab5';
import Tab6 from './components/tab6';
import "./index.less";
const App = (props) => {
  const {
    initSetting: { record },
  } = props;
  const [activityKey, setActivityKey] = useState('tab1');
  let tabListData = [
    {
      label: `产品信息`,
      key: "tab1",
    },
    {
      label: `产品图片`,
      key: "tab2",
    },
    {
      label: `销售信息`,
      key: "tab3",
    },
    {
      label: `财务信息`,
      key: "tab4",
    },
    {
      label: `产品手册`,
      key: "tab5",
    },
    {
      label: `操作记录`,
      key: "tab6",
    }
  ];
  const [tabsList] = useState(tabListData);

  //切换tabs
  const onChange = (key) => {
    setActivityKey(key);
  };
  return (
    <div className='product-detail-page'>
      <div className="detail_l">
        <p title={record?.materialCode}>
          {record?.materialCode}
        </p>

        <Tabs
          activeKey={activityKey}
          tabPosition="left"
          items={tabsList}
          onChange={onChange}
        />
      </div>
      <div className="detail_content">
        <Content record={record} activityKey={activityKey} />
      </div>
    </div>
  );
};
export default App;

export const Content = (props) => {
  const { record } = props;
  const map = {
    "tab1": <Tab1 record={record} />,
    "tab2": <Tab2 record={record} />,
    "tab3": <Tab3 record={record} />,
    "tab4": <Tab4 record={record} />,
    "tab5": <Tab5 record={record} />,
    "tab6": <Tab6 record={record} />,
  };
  return map[props.activityKey];
}
```



```jsx
import { getLocale } from "umi";
import { Tabs } from "antd";
import React, { useState } from "react";
import { useIntlMsg as intlMsg } from "@/hooks";
import "./index.less";

export default function (props) {
  const record = props?.initSetting?.record || {};
  const [activityKey, setActivityKey] = useState("tab1");

  // 国际版详情新增Tab (库存信息，价格手册)
  const internationalExtraTab =
    getLocale() == "en-US"
      ? {
          tab8: intlMsg("priceBook"),
          tab9: intlMsg("stockInfo"),
        }
      : {};

  // 所有的tab映射
  const allTab = {
    tab1: intlMsg("productInfo"),
    tab2: intlMsg("productPicture"),
    tab3: intlMsg("salesInfo"),
    tab4: intlMsg("financesInfo"),
    tab5: intlMsg("productBook"),
    ...internationalExtraTab,
    tab6: intlMsg("packageInfo"),
    tab7: intlMsg("operationRecord"),
  };

  // 构造展示的Tab组件items数据
  record.largeCategory !== "10" ? delete allTab.tab6 : "";
  const showTabItemslist = Object.keys(allTab).map((key) => ({
    key,
    label: allTab[key],
  }));

  return (
    <div className="product-detail-page">
      <div className="detail_l">
        <p title={record?.materialCode}>{record?.materialCode}</p>
        <Tabs
          activeKey={activityKey}
          tabPosition="left"
          items={showTabItemslist}
          onChange={(key) => setActivityKey(key)}
        />
      </div>
      <div className="detail_content">
        {DynamicComponent({ is: activityKey, rootProps: props, record })}
      </div>
    </div>
  );
}

function DynamicComponent({ is, ...rest }) {
  return React.createElement(require(`./components/${is}.jsx`).default, {
    ...rest,
  });
}

```

![image-20230811172536659](C:\Users\sc9632\AppData\Roaming\Typora\typora-user-images\image-20230811172536659.png)

## Hooks

```js
import { useIntl } from "umi";

export function useIntlMsg(key) {
  const intl = useIntl();
  return intl.formatMessage({ id: key });
}
```

- 国际化优化，以前通过getLocale判断国际化，现在封装useIntlMsg直接全局复

### 难点（印象深刻）

- 3级大类表单联动
- 组件拆分
- 0acd6f7: feat: 提示文案统一管理