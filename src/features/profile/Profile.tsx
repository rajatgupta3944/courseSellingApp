import { Card, Avatar, Typography, Divider, Button, Flex } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined, CodeOutlined } from '@ant-design/icons'
import CourseAvatar from '../../components/common/CourseAvatar';
import CourseButton from '../../components/common/CourseButton';
import UserData from '../../data/userData.json';
import LoginButton from '../auth/pages/LoginButton';
import { useAuth } from 'react-oidc-context';
import LogoutButton from '../auth/pages/LogoutButton';
 
const Profile = () => {
  const { Text } = Typography;
  const auth = useAuth();

  return (
    <Card style={{ width: 260, borderRadius: 12 }}>
      <Flex align="center" gap={12}>
        <CourseAvatar src={UserData?.image} name="Rajat" />
        <Flex vertical>
          {/* <Text strong>{UserData?.name}</Text> */}
          <Text type="secondary" style={{ fontSize: 12 }}>
            {auth?.user?.profile?.email || "Agent"}
          </Text>
        </Flex>
      </Flex>

      <Divider />

      <Flex vertical gap={8}>
        {auth.isAuthenticated ? <CourseButton type="text" label="My Courses" icon={<CodeOutlined />} block /> : <CourseButton label="Enroll!!" />}
        <CourseButton type="text" label="Settings" icon={<SettingOutlined />} block />
        {!auth.isAuthenticated ? <LoginButton /> :
        <LogoutButton />
    }
      </Flex>
    </Card>
  )
}

export default Profile
