import React from 'react';
import styles from './Movie.module.css';

const  Movie = (props) => {
  return(
    <div className = {styles.movie}>
      <div className = {styles.poster}>      
        <img src={props.imageWay} />
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