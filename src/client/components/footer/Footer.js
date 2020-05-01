import React from 'react';
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <span id = {styles.footerText}> {props.footerText} </span>
    </div>
  )
}

export default Footer;