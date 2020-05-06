import React from 'react';
import headerPicture from '@root/client/images/headerPicture.jpg'
import Head from './head/head';
import Container from './container/Container';
import styles from './Description.module.css';
import cn from 'classnames';

import './Description.module.css';

const Description = (props) => {
  return (
<<<<<<< HEAD
    <div  className={styles.description}>
      <div className={styles.background}>
        <img src={headerPicture} alt="background image" />
=======
    <div className="description">
      <div className="description-background">
        <img src="./assets/headerPicture.jpg" alt="background image" />
>>>>>>> origin/develop
      </div>
      <Head />
      <Container movie = {props.movie}/>
    </div>
  )
} 

export default Description;
