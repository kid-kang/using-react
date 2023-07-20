import { getTableData, tableColumns } from './config';
import { Table } from 'antd';
import { useState } from 'react';

const tableData = getTableData(50);

export default function AntdProTest() {
  // 存放勾选的每条数据的key值
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // onSelectChange触发会传入更新后的selectedRowKeys
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys);

  return (
    <div style={{ padding: '0 100rem' }}>
      <Table
        dataSource={tableData}
        columns={tableColumns}
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        // 当排分页、排序、筛选（不是勾选）变化时触发
        onChange={(e) => console.log('handleTableChange', e)}
        scroll={{ x: 1800, y: 440 }} // 设置x y滚动总的宽度
      />
    </div>
  );
}
