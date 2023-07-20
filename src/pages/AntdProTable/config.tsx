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

// 造数据
function setProTableData() {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push({
      key: i,
      name: `wzk${i}`,
      age: i,
      sex: i % 2 === 0 ? '男' : '女',
      address: 'dasdhasiodhkasdksa',
      phone: '13454546757',
    });
  }
  return arr;
}

export function api(params = {}) {
  console.log('params: ', params);
  return Promise.resolve(setProTableData());
}

export const columns: ProColumns<ProTableDataItem>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    copyable: true,
    // hideInTable: true, // 写了这个就不是列  就是搜索组件
    // fixed: 'left', // 固定列
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
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
    search: false,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 80,
    valueType: 'select', // 定义搜索表单类型
    valueEnum: {
      // 枚举select
      nan: '男',
      nv: '女',
    },
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 180,
    search: false,
    ellipsis: true, // 设置 ellipsis 可以让单元格内容根据宽度自动省略。
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
    search: false, // 是否显示该列的搜索表单
  },
  {
    title: '操作',
    valueType: 'option', // 该类型不会产生搜索表单
    key: 'action',
    // fixed: 'right', // 固定列
    width: 170,
    render: () => {
      return <Button>Edit</Button>;
    },
  },
];
