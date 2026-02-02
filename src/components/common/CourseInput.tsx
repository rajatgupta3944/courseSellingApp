import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const CourseInput = ({label, type, name, value, onChange, className, placeholder, rows}: any) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === 'textArea' ? <TextArea
          name={name}
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          rows={rows}
        /> : <Input type={type} name={name} value={value} onChange={onChange} className={className} placeholder={placeholder} />}
    </div>
  )
}

export default CourseInput