import React, {useEffect, useState}from "react";
import * as Yup from 'yup';
import styles from "./CadastrarInformacoes.module.css";
import { Formik, Form } from "formik";
import Input from "../../../components/forms/Input";
import Textarea from "../../../components/forms/Textarea";
import { Informacoes, createInformacoes, getInformacoes } from "../../../services/informacoesService";
import InformacoesCard from "../InformacoesCard/InformacoesCard";

const CadastrarInformacoes:React.FC = ()=>{

  const [informacoes, setInformacoes] = useState<Informacoes>({} as Informacoes)

  const initialValues : Informacoes = {
    id: 1,
    foto: '',
    nome: '',
    cargo: '',
    resumo:'',
  }

  const validationSchema = Yup.object().shape({

    foto: Yup.string().required("Campo obrigatório"),
    nome: Yup.string().required("Campo obrigatório"),
    cargo: Yup.string().required("Campo obrigatório"),
    resumo: Yup.string().required("Carpo obrigatório"),

  });

  const fetchInformacao = async ()=>{
    try {
      const informacao = await getInformacoes();
      setInformacoes(informacao)
    } catch (error) {
      console.error('Erro ao buscar informacoes:', error)      
    }
  } 

  useEffect(()=>{
    fetchInformacao()
  }, [])


  const onSubmit = async(values:Informacoes, {resetForm} : {resetForm: ()=> void})=>{
    try {
      await createInformacoes(values);
      setInformacoes(values);
      console.log(values);
      //resetForm();
      alert('Formulario Enviado!')
    } catch (error) {
      console.error('Erro ao enviar o formulario:', error);
      alert('Ocorreu um erro ao enviar o formulario. Tente novamente.')
    }
    
  }
  
  return(
    <div className={styles.formWrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {({errors, touched}) =>(       

        <Form className={styles.form}>

          <h2 className={styles.title}> Cadastrar Informações</h2>

          <Input 
            label="Foto"
            name="foto"
            errors={errors.foto}
            touched={touched.foto}
          />

          <Input 
            label="Nome"
            name="nome"
            errors={errors.nome}
            touched={touched.nome}
          />

          <Input 
            label="Cargo"
            name="cargo"
            errors={errors.cargo}
            touched={touched.cargo}
          />

          <Textarea 
            label="Resumo"
            name="resumo"
            errors={errors.resumo}
            touched={touched.resumo}
          />

          <button type="submit" className={styles.button}>Salvar</button>       

        </Form>

        )}
      </Formik>

      <InformacoesCard informacoes={informacoes} />

    </div>
  )
}

export default CadastrarInformacoes;