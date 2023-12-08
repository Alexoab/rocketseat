/* Use o RFC pra criar a função  */
import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'
/*o huck  useField é a api que vai conectar => seu input com seu unForm.  
useref: referenciando os inputs*/

export default function Input({ name, ...rest }) {/* ...rest vai buscar todas as propriedades que não são name que vai repassar para o input */
  /* Aqui é um hulk que tem que passar parâmetros  */
  /* const field = useField(name); */

  const inputRef = useRef(null);/*  referenciando o ref a função */
  const { fieldName, registerField, defaultValue, error } = useField(name,);
  /* fieldName é o mesmo nome  final do nosso  input que ele recebe : Input{name}  
   registerField : é uma função que será disparado em tela .  importo o useEffect chama o refisterFiel

  */
  /* vamos ver o que está rolando  */
  /* console.log(inputRef.current); */

  /*  useEffect(()=> {console.log(inputRef.current.value)},[inputRef]); */
  useEffect(() => { /* Está relacionado com resgisterField disparando uma função. */
    registerField({ /* a função é responsável pelo registro do input do formulário */
      name: fieldName,/* Vai depender do valor digitado no input  */
      ref: inputRef.current,/*  o valor atual digitado  */
      path: 'value'/* é propriedade .Qual é o valor que tenho na ref será mostrado aqui  */
    })
  }, [fieldName, registerField]);
  return (
    /* como vamos fazer para acessar os dados básicos de um input 
    onClange vai ouvir tudo que ele irá altera o valor do input. e vou pegar o valor digitado por ele = e.target.value vou ter o valor desse input. Assim eu armazenaria em um estado assim teria acesso a essa informação. em tempo real 
    <input onChange={e =>e.target.value }/>
    /* <input ref={inputRef} value ="123"/>
    */

    <div>
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {/*  O ref eu consigo acessar a arvore dom apenas referenciando.
      vide em cima sobre o rest. Agora eu uso o defaultValue como propriedade para receber um dado vindo , simulando de um backend.Veja no form no app initialData={initialData}  */}
       { error && <span style={{color: '#f00'}}>{error}</span>}
    </div>

  );
}

// o significado de Unform vem de umcontrolled-form
// Não anotar os dados de um input enquanto digita
// o Unform é um framework para aplicar um formato de dados a um componente HTML