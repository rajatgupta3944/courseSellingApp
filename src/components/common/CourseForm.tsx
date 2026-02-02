import { Form } from "antd"
import type { FormHTMLAttributes, ReactNode } from "react"

type CourseFormProps = {
  children: ReactNode
  className?: string
  onSubmit?: FormHTMLAttributes<HTMLFormElement>['onSubmit']
}

const CourseForm = ({
  children,
  className,
  onSubmit,
}: CourseFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <Form component="div" className={className} >
        {children}
      </Form>
    </form>
  )
}

export default CourseForm;