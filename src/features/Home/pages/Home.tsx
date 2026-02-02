import { Flex, Image, Typography } from 'antd'
import React from 'react'
import { coursesPhoto } from '../../../assets'

const Home = () => {
  const {Text} = Typography
  return (
    <Flex justify='space-between' style={{backgroundColor: "#292827"}}>
      <Flex vertical className='home-container'>
        <Text className='txt-size-40 flex-center'>Full Stack Course!!</Text>
        <Text className='color-gray txt-size-20 w-50 m-auto'>
          Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
        </Text>
      </Flex>
      <Image src={coursesPhoto} ></Image>
    </Flex>
  )
}

export default Home