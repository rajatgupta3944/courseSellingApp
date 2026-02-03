import React from 'react';
import { useAppSelector } from '../../../app/hooks'
import CourseCard from '../../../components/common/CourseCard';
import { Flex } from 'antd';


const Cart = () => {
  const { items, totalAmount } = useAppSelector(state => state.cart)
  console.log(items, totalAmount)
  return (
    <Flex gap={20}>{items?.map((item: any) => {
      return <CourseCard title={item.title} price={item.price} quantity={item.quantity}></CourseCard>
    })}</Flex>
  )
}

export default Cart