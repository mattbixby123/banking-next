'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
//@ts-ignore
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Divide, Loader } from 'lucide-react'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions'

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setuser] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ''
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setisLoading(true)

      try {
        // Sign up with Appwrite & create a plain link token
        if(type === 'sign-up') {
          const newUser = await signUp(data);

          setuser(newUser);
          }
        if(type === 'sign-in') {
            const response = await signIn({
              email: data.email,
              password: data.password
            })

            if(response) router.push('/')
        }
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false)
      }
    }
  

  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
      <Link href="/"
          className='cursor-pointer flex items-center gap-1'>
            <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>

          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
              {user
              ? 'Link Account'
            : type === 'sign-in'
              ? 'Sign In'
              : 'Sign-Up'}
              <p className='text-16 font-normal text-gray-600'>
                {user
                  ? 'Link your account to get started'
                  : 'Please enter your details'
                }  
              </p>
            </h1>
          </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-5'>
          {/* PlaidLink */}
        </div>
      ): (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className='flex gap-4'>
                    <CustomInput 
                    control={form.control}
                    name='firstName'
                    label='First Name'
                    placeholder='ex: John'
                    />
                    <CustomInput 
                    control={form.control}
                    name='lastName'
                    label='Last Name'
                    placeholder='ex: Doe'
                    />
                  </div>

                  <CustomInput 
                  control={form.control}
                  name='address1'
                  label='Address'
                  placeholder='Enter your specific mailing address'
                  />

                  <CustomInput 
                  control={form.control}
                  name='city'
                  label='City'
                  placeholder='Enter your city'
                  />

                  <div className='flex gap-4'>
                    <CustomInput 
                    control={form.control}
                    name='state'
                    label='State'
                    placeholder='ex: NY'
                    />
                    <CustomInput 
                    control={form.control}
                    name='postalCode'
                    label='Postal Code'
                    placeholder='ex: 11211'
                    />
                  </div>
                  
                  <div className='flex gap-4'>
                    <CustomInput 
                    control={form.control}
                    name='dateOfBirth'
                    label='Date of Birth'
                    placeholder='YYYY-MM-DD'
                    />
                    <CustomInput 
                    control={form.control}
                    name='SSN'
                    label='SSN'
                    placeholder='ex: xxx-xx-xxxx'
                    />
                  </div>
                </>
              )}
              <CustomInput 
              control={form.control}
              name='email'
              label='Email'
              placeholder='Enter your email'
              />

              <CustomInput 
              control={form.control}
              name='password'
              label='Password'
              placeholder='Enter your password'
              />
              <div className='flex flex-col gap-4'>
                <Button type="submit" disabled={isLoading} className='form-btn'>
                  {isLoading ? (
                    <>
                      <Loader size={20} className='animate-spin'/>
                      Loading...
                    </>
                  ) : type === 'sign-in'
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className='flex justify-center gap-a'>
            <p className='text-14 font-normal text-gray-600'>{type === 'sign-in' 
                ? "Don't have an account?" 
                : "Already have an account?"}
            </p>
            <Link className="form-link" href={type === 'sign-in' ? '/sign-up'
              : '/sign-in'}> 
                 {type === 'sign-in' ? 'Sign Up' : 'Sing In'}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};


export default AuthForm