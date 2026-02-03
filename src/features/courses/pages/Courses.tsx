import Flex from 'antd/es/flex'
import React from 'react'
import CourseList from '../../../data/courses.json'
import CourseCard from '../../../components/common/CourseCard'

const Courses = () => {
  return (
    <Flex wrap="wrap" gap={20} className='mt-20 ml-20'>
      {CourseList?.courses.map((course: any) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </Flex>
  )
}

export default Courses