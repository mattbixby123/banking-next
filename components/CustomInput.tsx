import React from 'react'
import type { Control, FieldValues, Path, FieldPath } from 'react-hook-form'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
//@ts-ignore
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string
  placeholder: string
}

const CustomInput = ({ 
  control, 
  name, 
  label, 
  placeholder 
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <FormLabel className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={name === 'password' ? 'password': 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </FormLabel>
        </div>
      )}
    />
  )
}

export default CustomInput