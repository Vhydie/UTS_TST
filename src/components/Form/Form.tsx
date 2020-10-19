import React, { ReactElement, useState } from 'react'
import styles from './Form.module.scss'
import SweetAlert from 'sweetalert2-react';
import axios from 'axios'

const Form = () : ReactElement => {
  const [name, setName] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  const postData = async (number : string, first : string, last : string) =>{
    const payload = {number, first, last}

    const { data : { name }} = await axios.post('https://uts-tst2020.azurewebsites.net/api/AddMessage', payload)
    
    setName(name)
    setNumber('')
    setFirst('')
    setLast('')
    setShow(true)
    
  }
  
  return (
    <React.Fragment>
      <div className = {styles.container}>
      <div className = {styles.welcome}>
        Halo! Kenalan Dong!!! { name }!
      </div>
      <div  className = {styles.formContainer}>
        <div className = {styles.field}>
          <div className = {styles.title}>
            Number
          </div>
          <input type = "text" 
            value = {number} 
            className = {styles.input} 
            onChange={(e) => setNumber(e.target.value)}/>
        </div>
        <div className = {styles.field}>
          <div className = {styles.title}>
            First
          </div>
          <input type = "text" 
            value = {first} 
            className = {styles.input} 
            onChange = {(e) => setFirst(e.target.value)}/>
        </div>
        <div className = {styles.field}>
          <div className = {styles.title}>
            Last
          </div>
          <input type = "text" 
            value = {last}
            className = {styles.input}
            onChange = {(e) => setLast(e.target.value)}/>
        </div>
        <div className={styles.btn} onClick={() => postData(number, first, last)}>
          Yuk Kenalan!!
        </div>
      </div>
    </div>
    <SweetAlert
      show = {show}
      title = {`Halo ${name}!`}
      title = {`Nama saya Vhydie`}
      onConfirm={() => setShow(false)}
    />
    </React.Fragment>
  )
}

export default Form
