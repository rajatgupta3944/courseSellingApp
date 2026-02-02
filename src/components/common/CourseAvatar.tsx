import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';

const CourseAvatar: React.FC = ({image}: any) => (
  <Space size={16} wrap>
    {!image ? <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>R</Avatar> :
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
  </Space>
);

export default CourseAvatar;