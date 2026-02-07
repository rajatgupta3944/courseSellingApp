import {
  Flex,
  Image,
  Space,
  Layout,
  Menu,
  type MenuProps,
  Popover,
} from "antd";
import React, { useState } from "react";
import { LookfinityLogoIcon } from "../../../assets";
import SearchBar from "../../../components/common/SearchBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CourseAvatar from "../../../components/common/CourseAvatar";
import Profile from "../../profile/Profile";
import CourseButton from "../../../components/common/CourseButton";
import { useAuth } from "react-oidc-context";
import LoginButton from "../../auth/pages/LoginButton";
import SignupButton from "../../auth/pages/SignupButton";
import LogoutButton from "../../auth/pages/LogoutButton";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  console.log(auth, 'auth')

  const items: MenuProps["items"] = [
  {
    key: "/",
    label: <Link to="/">Home</Link>,
  },
  {
    key: "/courses",
    label: <Link to="/courses">Courses</Link>,
  },
  {
    key: "/help",
    label: <Link to="/help">Help</Link>,
  },
  ...(auth.isAuthenticated
    ? [
        {
          key: "/cart",
          label: <Link to="/cart">Cart</Link>,
        },
      ]
    : []),
];

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <AntHeader style={{ overflow: "visible" }}>
      <Flex justify="space-between">
        <Space>
          <Image src={LookfinityLogoIcon} alt="logo" preview={false} />
          {/* <SearchBar
            className="searchBar"
            name="search"
            onChange={handleSearchChange}
            type="text"
            placeholder="Search..."
          /> */}
        </Space>
        <Space>
    {!auth.isAuthenticated ? (
    <>
      <SignupButton />
      <LoginButton />
    </>
  ) : (
    <LogoutButton />
  )}

          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={items}
          />

          <Popover
            content={<Profile />}
            trigger="click"
            placement="bottomRight"
          >
            <span>
              <CourseAvatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg/250px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg" />
            </span>
          </Popover>
        </Space>
      </Flex>
    </AntHeader>
  );
};

export default Header;
