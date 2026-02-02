import React from 'react'
import CourseInput from './CourseInput'

const SearchBar = ({className, name, onChange, type, placeholder}: any) => {
  return (
    <CourseInput className={className} name={name} onChange={onChange} type={type} placeholder={placeholder} />
  )
}

export default SearchBar