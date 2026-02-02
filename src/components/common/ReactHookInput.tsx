import { useController, type UseControllerProps, type FieldValues } from 'react-hook-form'
import CourseInput from './CourseInput'

function ReactHookInput<T extends FieldValues>(
  props: UseControllerProps<T> & { className?: string, label?: string, placeholder?: string }
) {
  const { className, label, placeholder, ...controllerProps } = props
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <CourseInput label={label} {...field} placeholder={placeholder || String(controllerProps.name)} className={className} />
      {fieldState.invalid && <b className='error'>{fieldState.error?.message}</b>}
    </div>
  )
}

export default ReactHookInput
