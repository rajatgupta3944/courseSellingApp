import { useController, type UseControllerProps, type FieldValues } from 'react-hook-form'
import CourseInput from './CourseInput'

function ReactHookInput<T extends FieldValues>(
  props: UseControllerProps<T> & { className?: string, label?: string, placeholder?: string, type?: string, rows?: number }
) {
  const { className, label, placeholder, type, rows, ...controllerProps } = props
  const { field, fieldState } = useController(controllerProps)

  return (
    <div>
      <CourseInput label={label} {...field} placeholder={placeholder || String(controllerProps.name)} rows={rows} className={className} type={type} />
      {fieldState.invalid && <b className='error'>{fieldState.error?.message}</b>}
    </div>
  )
}

export default ReactHookInput
