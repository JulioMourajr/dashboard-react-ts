import React from 'react'

import { useNavigate } from 'react-router-dom';
import { Formik, Form } from "formik";
import * as Yup from "yup";

import styles from './Login.module.css'

import Input from '../../components/forms/Input/Input';
import { login as loginService } from '../../services/authService';
import { useAuth } from '../../contexts/AuthContexts';

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
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async(values:LoginValues)=>{
    try {
      const user = await loginService(values.email, values.password)
      login(user)
      navigate("/");
      console.log(values)
    } catch (error) {
      console.log(error) 
      alert('Email ou senha invalidos')    
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

