import React from 'react'
import {Button} from 'antd';

const CourseButton = ({label, type, color, variant, shape, icon, clssName, ...rest}: any) => {
  return (
    <Button type={type} color={color} variant={variant} shape={shape} icon={icon} {...rest}>{label}</Button>
  )
}

export default CourseButton