import type { ColumnsType } from 'antd/es/table';
import { Button } from 'antd';

interface TableDataItem {
  key: React.Key;
  name: string;
  age: number;
  sex: '男' | '女';
  address: string;
  phone: string;
}

// 造table数据
const data: TableDataItem[] = [];
export const getTableData = (n: number) => {
  for (let i = 0; i < n; i++) {
    data.push({
      key: i,
      name: `胡彦斌 ${i}`,
      age: i,
      sex: i % 2 == 1 ? '女' : '男',
      address: `西湖区湖底公园${i}号`,
      phone: '13979898974',
    });
  }
  return data;
};

// 列
export const tableColumns: ColumnsType<TableDataItem> = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left', // 固定列
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
    sorter: (a, b) => a.age - b.age,
    // ellipsis: true, 设置 ellipsis 可以让单元格内容根据宽度自动省略。
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: 80,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 180,
  },
  ...setPhone(),
  {
    title: '操作',
    key: 'action',
    fixed: 'right', // 固定列
    width: 170,
    render: (row: TableDataItem) => {
      return <Button onClick={() => deleteRow(row)}>Delete</Button>;
    },
  },
];

function deleteRow(row: TableDataItem) {
  alert(JSON.stringify(row));
}

function setPhone() {
  const res = [];
  for (let i = 0; i < 8; i++) {
    res.push({
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    });
  }
  return res;
}
