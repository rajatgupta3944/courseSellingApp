import React from 'react'
import CourseForm from '../../../components/common/CourseForm'
import ReactHookInput from '../../../components/common/ReactHookInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Flex, Space } from 'antd'
import CourseButton from '../../../components/common/CourseButton'

type FormValues = {
  name: string
  email: string
}

const schema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed')
    .min(3, 'Minimum 3 characters required')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
})


const HelpForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
    },
    // mode: "onChange",
  })
  const onSubmit = (data: FormValues) => console.log(data)
  return (
    <Flex justify="center" className="form-wrapper">
  <CourseForm onSubmit={handleSubmit(onSubmit)} className="course-form">
    <Space direction="vertical" size={16} className="form-fields">
      <ReactHookInput
        control={control}
        name="name"
        rules={{ required: true }}
        placeholder="Enter your name..."
      />

      <ReactHookInput
        control={control}
        name="email"
        rules={{ required: true }}
        placeholder="Enter your email..."
      />

      <CourseButton
        type="primary"
        htmlType="submit"
        label="Submit"
        className="submit-btn"
      />
    </Space>
  </CourseForm>
</Flex>
  )
}

export default HelpForm