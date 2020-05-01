import React from 'react';
import styles from './Container.module.css';
import poster from '@root/client/images/poster.jpg'

const Container = (props) => {
  return (
    <div className = {styles.container}>
      <div className ={styles.image}>
        <img src={poster}/>
      </div>
      <div className = {styles.description}>
        <div className= {styles.nameRating}>
            <span>{props.movie.name}</span>
            <span>{props.movie.rating}</span>
        </div>
        <div className = {styles.shortDescription}>
          {props.movie.gengre}
        </div>
        <div className={styles.yearDuration}>
          <span className={styles.beautify}> {props.movie.year} </span> year 
          <span className={styles.beautify}> {props.movie.duration} </span> min
        </div>

        <div className = {styles.text}>
          <p>
            {props.movie.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Container;