import { Input } from 'antd'
import React from 'react'

const CourseInput = ({label, type, name, value, onChange, className, placeholder}: any) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input type={type} name={name} value={value} onChange={onChange} className={className} placeholder={placeholder} />
    </div>
  )
}

export default CourseInput