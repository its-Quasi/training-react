import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z, } from "zod"

//ERROR MESSAGES | REPLACE FOR TRANSLATIONS
const nameMessageError = "name is required"
const emailMessageError = "email is invalid"
const passwordMessageError = "this field have at least 6 characters"
const unmatchPasswords = "the password has no matchI"

const schema = z.object({
  name: z.string().min(1, nameMessageError),
  email: z.string().email(emailMessageError),
  password: z.string().min(6, passwordMessageError),
  confirmPassword: z.string().min(6, passwordMessageError)
}).refine(
  data => data.password === data.confirmPassword, {
  message: unmatchPasswords,
  path: ["confirmPassword"]
})

type FormValues = z.infer<typeof schema>

const CustomForm = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormValues> = () => {
    console.log()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          render={
            () =>
              <input id="name" type="string" className={`form-control ${errors.name ? "is-invalid" : ""}`} />

          }
        />
      </div>
    </form>
  )
}

export default schema