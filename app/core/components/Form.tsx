import { Button } from "."
import { Color, Size } from "app/utils/tailwindHelpers"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { PropsWithoutRef, ReactNode } from "react"
import { validateZodSchema } from "blitz"
import { z } from "zod"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  children?: ReactNode
  submitText?: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
}

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className="form" {...props}>
          {/* Form fields supplied as children are rendered here */}
          {children}

          {submitError && (
            <div role="alert" className="text-red-500 text-xs italic">
              {submitError}
            </div>
          )}

          {submitText && (
            <Button
              disabled={submitting}
              type="submit"
              size={Size.small}
              bgColor={Color.black}
              textColor={Color.white}
            >
              {submitText}
            </Button>
          )}
        </form>
      )}
    />
  )
}

export default Form
