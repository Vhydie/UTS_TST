import React, {ReactElement} from 'react'
import styles from './Header.module.scss'

const Header = () : ReactElement => {
  return (
    <div className = {styles.container}>
      <div className = {styles.title}>
        Ujian Tengah Semester
      </div>
      <div className = {styles.title}>
        II3160 Teknologi Sistem Terintegrasi
      </div>
      <div className = {styles.title}>
        Simple Web Application using Azure
      </div>
      <div className = {styles.title}>
        Vhydie Gilang Christianto The
      </div>
      <div className = {styles.title}>
        18218016
      </div>
    </div>
  )
}

export default Header
