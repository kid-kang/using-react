import { ProTable } from '@ant-design/pro-components';
// import { useState } from 'react';
import { columns, api } from './config';

export default function AntdProTable() {
  return (
    <div style={{ padding: '0 100rem' }}>
      <ProTable
        cardBordered
        columns={columns}
        editable={{
          type: 'multiple',
        }}
        request={(params) => {
          console.log(api(params));
          return api(params);
        }}
      />
    </div>
  );
}
