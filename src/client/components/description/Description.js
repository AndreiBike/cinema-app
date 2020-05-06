import React from 'react';
import headerPicture from '@root/client/images/headerPicture.jpg'
import Head from './head/head';
import Container from './container/Container';
import styles from './Description.module.css';
import cn from 'classnames';

const Description = (props) => {
  return (
    <div  className={styles.description}>
      <div className={styles.background}>
        <img src={headerPicture} alt="background image" />
      </div>
      <Head />
      <Container movie = {props.movie}/>
    </div>
  )
} 

export default Description;
