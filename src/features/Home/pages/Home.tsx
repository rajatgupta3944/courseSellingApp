import { Flex, Image, Typography } from 'antd'
import React from 'react'
import { coursesPhoto } from '../../../assets'
import CourseButton from '../../../components/common/CourseButton'
import {useNavigate} from "react-router";

const Home = () => {
  const {Text} = Typography
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Courses")
  }
  return (
    <Flex justify='space-between' style={{backgroundColor: "#292827"}}>
      <Flex vertical className='home-container'>
        <Text className='txt-size-40 flex-center'>Full Stack Course!!</Text>
        <Text className='color-gray txt-size-20 w-50 m-auto'>
          Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
        </Text>
        <div className="flex-center mt-20">
          <CourseButton label="Go to courses" type="primary" onClick={handleClick} />
        </div>
      </Flex>
      <Image src={coursesPhoto} preview={false} className="w-500" />
    </Flex>
  )
}

export default Home