import React from 'react'
import CourseForm from '../../../components/common/CourseForm'
import ReactHookInput from '../../../components/common/ReactHookInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Flex, Space, Typography } from 'antd'
import CourseButton from '../../../components/common/CourseButton'
import TextArea from 'antd/es/input/TextArea'

type FormValues = {
  name: string
  email: string
  details: string
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
  details: yup.string().required('Details are required'),
})


const HelpForm = () => {
  const { handleSubmit, reset, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
    // mode: "onChange",
  })
  const onSubmit = (data: FormValues) => console.log(data)
  const handleReset = () => {
    reset()
  }
  return (
    <Flex justify="center" className="form-wrapper">
  <CourseForm onSubmit={handleSubmit(onSubmit)} className="course-form">
    <Flex justify="center">
    <Typography.Title level={2}>Contact Us!!</Typography.Title>
    </Flex>
    <Space orientation="vertical" size={16} className="form-fields">
      <ReactHookInput
        type="text"
        control={control}
        name="name"
        rules={{ required: true }}
        placeholder="Enter your name..."
      />

      <ReactHookInput
        type="email"
        control={control}
        name="email"
        rules={{ required: true }}
        placeholder="Enter your email..."
      />
      <ReactHookInput
        type="textArea"
        control={control}
        name="details"
        rules={{ required: true }}
        rows={4}
        placeholder="Describe your issue..."
      />
      <Flex justify='space-between'>
        <CourseButton
        label="Reset"
        onClick={handleReset}
      />
      <CourseButton
        type="primary"
        htmlType="submit"
        label="Submit"
        className="submit-btn"
      />
      </Flex>
    </Space>
  </CourseForm>
</Flex>
  )
}

export default HelpForm