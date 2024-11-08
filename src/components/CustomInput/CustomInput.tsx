import { Control, Controller } from "react-hook-form"

interface Props {
  name: string
  label: string
  type?: string
  control: Control<any>
  errors: any
}

const CustomInput = ({name, label, type, control, errors}: Props) => {
  return (
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <Controller
          name={name}
          control={control}
          render={
            () => (
              <input id={name}
                type={type}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
            )
          }
        />
      </div>
  )
}

export default CustomInput
