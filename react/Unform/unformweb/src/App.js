
import './App.css';
import {Form} from '@unform/web'/* 1° importe o Form */
import Input from './components/form/input';
import {Scope} from '@unform/core'
import * as Yup from 'yup'
import { useRef } from 'react';

const initialData = { /* Onde eu já começo um campo já preenchido */
  email: 'Alexoab@gmail.com',/* simulando um Back end com dados  */
  address:{
    city:'Rio do sul',
    number:'0',
  }

}
/* const user = {
  name: "Alex oliveira ",
  address:{ /*  é um objeto é uma estrutura de array de objetos para simbolizar  */
 /*  street: "Rua das bençoes ", 
   number: "1234639 ",
}
} */ 

function App() {
  const fomRef = useRef(null);/* uma função referenciando o Ref */

 async function hadleSubimit(data,{reset} ){/* Essa função recebe alguns dados que imprimi em tela . Também tem o reset, quando eu envio ele zera os inputs */
  /* Usando Yup  */

  try { 
     const schema = Yup.object().shape({/*  Aqui o shape vai possuir vários campos */
      name:Yup.string().required('O nome é obrigatório'),
      email:Yup.string().email('Email inválido')
      .required('O e-mail é obrigatório '),
      address: Yup.object().shape({
        city: Yup.string().min(3,'No mínimo 3 caracteres por favor, refaça').required('A cidade é obrigatório')

      })


     });
 
   /*  if (data.name === ""){ */

      /* alert("O nome é obrigatório")  está é uma forma de validar os dados no js  */
      /* fomRef.current.setFieldError('name', 'O nome é obrigatório Fera! ')
      fomRef.current.setFieldError( 'address.city', 'cidade obrigatório') .quando eu quero setar um único input de erro eu uso setFieldError */
      /* Quando quero vários inputs */
      /* ######################### */
     /*  fomRef.current.setErrors({
        name: 'O nome é obrigatório',
        address:{
          city:'A cidade é obrigatório'
        }
      } ); */
   
    await schema.validade(data, {
      abortEarly: false,/*  Quero que o yupe faça a validação completa dos campos */
    })
    /* Existe outra que usa biblioteca Yup schema database  */
   /*  console.log(data); */
   console.log(fomRef.current);/* veja o que ele está devolvendo como objeto  */
   reset();/* os campos são limpos de forma automática */
  } catch (err){
    if (err instanceof Yup.ValidationError){
      console.log(err);
    }
   
  }
  
 }
  return (
    <div className="App">
  <h1> Cadastro -Aprendendo a usar o Unform. </h1>
  {/* <Form onSubmit = {handleSubmit}> */}
  <Form ref={fomRef} initialData={initialData} onSubmit={hadleSubimit}>{/* Aqui estou chamando o hadle Subimite .initialData simula um backend . Veja como eu valido no form usando a propriedade error, passo como ref( uma mensagem de erro junto com input) */}
    {/* <Input type="name"  name="nome"/> */}
    <Input name="name"/>
    <Input type= "email" name="email" />{/*  é o mesmo mome da propriedade acima initialData */}
    <Input type= "password"name="senha"/>
   {/*  <Input name="address.street"  /> */}{/* se eu quero que address esteja demtro de um objeto chamado street faça . Demostrando como os dados são recebidos e devolvidos do nosso backend , mantendo a estrutura do formulario */}
   {/*  <Input name="address.city"  />
    <Input name="address.state"  />
    <Input name="address.number"  /> */}

    {/* use a propriedade  Scope */}
     
    <Scope path= "address" >
      <Input name="city"  />
      <Input name="state"  />
      <Input name="number"  />
      <Input name="neighbourhood"  />
    </Scope>

    <button type='submit'>Envia logo </button>
  </Form>
    </div>
  );
}
/* Unform tem duas grandes diferenciais 1° performance sobre reder ,uncontrol largas e complexa estruturas de dados.  e a 2°  */
export default App;
