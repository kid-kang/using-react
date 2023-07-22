import type { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

export interface TableHeadType {
  key: React.Key;
  name: string;
  age: number;
  sex: '男' | '女';
  address: string;
  image: string;
  time: string | number;
}

interface FetchResType {
  data: TableHeadType[];
  success: boolean;
  total: number;
}

interface ParamsType {
  pageSize?: number;
  current?: number;
  sex?: '男' | '女';
  startTime?: string;
  endTime?: string;
  changeRow?: TableHeadType;
}

// 模拟接口
export async function fetchData(params: ParamsType) {
  console.log('params: ', params);
  const data = getData(params?.sex);
  return await new Promise<FetchResType>((resolve) => {
    setInterval(
      () =>
        resolve({
          data,
          success: true,
          total: data.length,
        }),
      300
    );
  });
}

// columns配置
export const columns: ProColumns<TableHeadType>[] = [
  {
    title: '序号',
    valueType: 'indexBorder', //indexBorder就是proTable自动帮你生成的1，2，3，4的序号
    editable: false, // 控制该列不能编辑
  },
  {
    // fixed: 'left', // 固定列
    title: '姓名', // 表头标题
    dataIndex: 'name', // 对应返回的data数据中数组对象中的key
    key: 'name', // 表头key
    width: 140,
    copyable: true, // 一键复制icon
    search: false, // 是否显示该列的搜索表单
    tip: '显示在表头的提示',
    // 编辑时的校验
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    valueType: 'select', // 定义搜索表单类型及编辑时的类型
    align: 'center', // 表头文字水平居中
    filters: true, //表头的筛选菜单项，当值为 true 时，自动使用 valueEnum 生成
    // onFilter不会触发request! 只是静态筛选符合的, 返回的值为false会过滤掉,每条数据都会判断
    onFilter: true, // 同等于下面操作
    // onFilter: (value, record) => {
    //   // value是选中valueEnum中的key record是这条数据
    //   return record.sex === value ? true : false;
    // },
    // 枚举select
    valueEnum: {
      男: {
        text: '男', //text表示实际显示出来的文本
        status: 'Success', //表示文字前面的那一个点是什么颜色
      },
      女: {
        text: '女',
        status: 'Error',
      },
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    search: false,
    align: 'center',
    valueType: 'digit',
    // renderText: (val: number) => `${val} 岁`, // 展示数据额外文字, 可编辑时慎用!!!
    sorter: true, // 设置可排序
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    search: false,
    align: 'center',
    ellipsis: true, // 设置 ellipsis 可以让单元格内容根据宽度自动省略。
  },
  {
    title: '创建时间',
    key: 'time',
    dataIndex: 'time',
    valueType: 'date',
    align: 'center',
    sorter: true,
    hideInSearch: true, // 不展示该搜索表单
  },
  {
    title: '创建时间',
    dataIndex: 'time',
    valueType: 'dateRange',
    hideInTable: true, // 写了这个就不是列  就是自定义搜索组件
    search: {
      transform: (value: [string, string]) => {
        console.log('value: ', value);

        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    valueType: 'image',
    search: false,
    align: 'center',
  },
  {
    title: '操作',
    key: 'action',
    align: 'center',
    valueType: 'option', // 该类型不会产生搜索表单
    // fixed: 'right', // 固定列
    render: (_, record, __, action) => {
      // render为自定义渲染, record为当前行数据
      return (
        <Button
          key='editable'
          onClick={() => {
            action?.startEditable?.(record.key);
          }}
        >
          Edit
        </Button>
      );
    },
  },
];

// 造表格数据
function getData(sex: '男' | '女' | undefined) {
  const data: TableHeadType[] = [];
  const imgArr = [
    'https://img2.baidu.com/it/u=4049022245,514596079&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690131600&t=f78597d1a4011d03e7299f35efb58376',
    'https://img2.baidu.com/it/u=3225755762,2769065243&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1690131600&t=cbcb633f7577e7a517306b8e121c55b7',
    'https://t8.baidu.com/it/u=364717488,147790117&fm=30&app=106&size=f242,150&n=0&f=JPEG&fmt=auto?s=D232AA655A83077C5695E59F03003095&sec=1690131600&t=31623a7f04e7c0da969e247c6c150c9e',
  ];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      name: `wzk${i}`,
      age: i,
      sex: i % 2 === 0 ? '男' : '女',
      address: 'dasdhasiodhkasdksa',
      image: imgArr[i % 3],
      time: '2020-05-26',
    });
  }
  return sex ? data.filter((val) => val.sex === sex) : data;
}
