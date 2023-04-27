import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";

import styles from './Login.module.css'

import Input from '../../components/forms/Input';

interface LoginValues{
  email: string;
  password: string;
}

const initialValues:LoginValues = {
  email:"",
  password:"",
}

const validationSchema = Yup.object().shape({
  email:Yup.string()
    .email("E-mail inválido")
    .required("Email é obrigatorio"),
  password:Yup.string()
  .min(6,"A senha deve ter pelo menos ¨caracteres")
  .required("Senha é obrigatorio"),
});


const Login = () => {

  const onSubmit = async(values:LoginValues)=>{
    try {
      // logica de login
      console.log(values)
    } catch (error) {
      console.log(error)     
    }
  }

  return (
    <div className={styles.loginWrapper}> 
        <div className={styles.formWrapper}>
          <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}          
          >
            {({errors, touched})=>(
              <Form className={styles.form}>
                <h1 className={styles.title}>Meu Site Pessoal</h1>
                <Input
                  label='Email'
                  name='email'
                  type='email'
                  errors={errors.email}
                  touched={touched.email}                
                />

                <Input
                  label='Password'
                  name='password'
                  type='password'
                  errors={errors.password}
                  touched={touched.password}                
                />

                <button type='submit' className={styles.button}>
                  Login
                </button>

              </Form>
            )}
            
          </Formik>

        </div>

    </div>
  )
}

export default Login

