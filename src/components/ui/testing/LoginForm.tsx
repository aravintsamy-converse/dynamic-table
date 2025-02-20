// src/components/LoginForm.tsx
"use client"
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Button } from '../button'

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
})

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className='flex flex-col'>
        <label htmlFor="email">Email</label>
        <Field className='mb-2 border p-1.5 ' name="email" type="email" />
        <label htmlFor="email">Password</label>
        <Field className='mb-2 border p-1.5 ' name="password" type="password" />
        <Button type="submit">Click me</Button>

      </Form>
    </Formik>
  )
}