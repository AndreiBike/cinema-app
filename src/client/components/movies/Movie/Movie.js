import React from 'react';
import styles from './Movie.module.css';
import poster from '../../../images/poster.jpg'

const  Movie = (props) => {
  return(
    <div className = {styles.movie}>
      <div className = {styles.poster}>      
        <img src={poster}/>
      </div>

      <div className = {styles.filmName}>
        <div>{props.name}</div>
        <div> {props.year} </div>
      </div>

      <div className = {styles.gengre}> 
        {props.gengre}
      </div>
    </div>
  )
}

export default Movie;