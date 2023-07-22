import type { ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

export interface ProTableDataItem {
  key: React.Key;
  name: string;
  age: number;
  sex: '男' | '女';
  address: string;
  phone: string;
}

interface FetchResType {
  data: ProTableDataItem[];
  success: boolean;
  total: number;
}

interface ParamsType {
  pageSize?: number;
  current?: number;
  sex?: '男' | '女';
}

// 模拟接口
export async function fetchData(params: ParamsType) {
  console.log('params: ', params);
  // 造数据
  let data: ProTableDataItem[] = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      name: `wzk${i}`,
      age: i,
      sex: i % 2 === 0 ? '男' : '女',
      address: 'dasdhasiodhkasdksa',
      phone: '13454546757',
    });
  }

  data = params.sex ? data.filter((val) => val.sex === params.sex) : data;

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
export const columns: ProColumns<ProTableDataItem>[] = [
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
    // hideInTable: true, // 写了这个就不是列  就是搜索组件
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
    valueType: 'select', // 定义搜索表单类型
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
    renderText: (val: number) => `${val} 岁`, // 展示数据额外文字
    sorter: (a, b) => a.age - b.age, // 默认排序
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
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
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
