import { ProTable, ProForm, ProFormText } from '@ant-design/pro-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Drawer, Button } from 'antd';
import { useState } from 'react';
import { columns, fetchData, type ProTableDataItem } from './config';

const editRow = (row: ProTableDataItem) => {
  console.log('编辑保存: ', row);
  return fetchData({
    pageSize: 10,
    current: 1,
  });
};

export default function AntdProTable() {
  const [open, setOpen] = useState(false);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);

  return (
    <div style={{ padding: '0 100rem' }}>
      <ProTable
        headerTitle='个人信息查询'
        cardBordered // 板块板框
        columns={columns} // 列配置
        pagination={{ pageSize: 5 }} // 用于配置分页功能的相关参数，包括当前页码、每页显示的数据条数、总数据条数等
        // params={params} // 额外设置request的请求参数
        // search={false}  // false为不展示搜索板块, 也可以传入搜索按钮部分的配置
        // options={false} // 用于配置表格的一些基本选项。这个属性可以设置为一个对象，包含多个选项，用于控制表格的分页、密度、搜索、导出等功能。
        // onSubmit={(params) => {}} // 点击查询时触发,传入搜索的参数
        request={fetchData} // 需要获取数据时，会调用"request"属性所指定的函数，并将当前的查询参数、排序规则、过滤条件等信息作为参数传递给这个函数。这个函数需要返回一个Promise对象，表示异步操作的结果。当ProTable组件获取到异步操作的结果后，会自动更新表格的数据源，并重新渲染表格。
        // manualRequest = {true}  // 表示初次渲染不发请求

        toolBarRender={() => [
          <Button type='primary' shape='round' icon={<PlusCircleOutlined />} onClick={() => setOpen(true)}>
            新增
          </Button>,
        ]} // 用于自定义表格工具栏的渲染内容。这个属性接受一个函数作为参数，用于渲染工具栏的内容。
        rowSelection={{}} // 勾选 参考Table
        // tableAlertRender={({ selectedRowKeys, selectedRows }) =>'自定义勾选文案'}
        // tableAlertOptionRender={props => {
        //   console.log(props);
        //   return <div>自定义勾选操作</div>;
        // }}

        editable={{
          // 配置row可编辑
          // editableKeys,
          onChange: (e, a) => {
            console.log(e, a);
          },
          type: 'single', // 能同时编辑多行还是单行 single | multiple
          actionRender: (row, config, defaultDom) => {
            console.log('actionRender', row, config);
            return [defaultDom.save, defaultDom.cancel];
          },
          onSave: (_, row) => editRow(row),
        }}
      />

      <Drawer
        destroyOnClose // 用于控制弹窗是否在关闭时销毁组件实例。
        title='新增行'
        placement='right' // 出来的位子
        onClose={() => setOpen(false)}
        open={open}
      >
        <ProForm>
          <ProFormText width='md' name='name' label='姓名' placeholder='请输入配姓名' rules={[{ required: true }]} />
          <ProFormText width='md' name='age' label='年龄' rules={[{ required: true }]} />
          <ProFormText width='md' name='sex' label='性别' rules={[{ required: true }]} />
        </ProForm>
      </Drawer>
    </div>
  );
}

// actionRef.current.reload()   //刷新表格，触发request属性拉取最新数据
