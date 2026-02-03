import Flex from 'antd/es/flex'
import React from 'react'
import CourseList from '../../../data/courses.json'
import CourseCard from '../../../components/common/CourseCard'
import { useAppDispatch } from '../../../app/hooks';
import { addToCart } from '../../../features/cart/CartSlice';

const Courses = () => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (course: any) => {
  dispatch(
  addToCart({
    id: course.id,
    title: course.title,
    price: course.price,
    quantity: 1,
  })
)
}
  return (
    <Flex wrap="wrap" gap={20} className='mt-20 ml-20'>
      {CourseList?.courses.map((course: any) => (
        <CourseCard key={course.id} {...course} onClick={() =>  handleAddToCart(course)} />
      ))}
    </Flex>
  )
}

export default Courses