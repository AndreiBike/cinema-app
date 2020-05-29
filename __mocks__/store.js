import {data} from "./../src/client/store/store";

export function getMovieById(id) {
  return new Promise((resolve, reject) => {
    if (data.movies.length > 0) {
        resolve(data.movies.find((movie) => {
          if (movie.id === id) {
            return true;
          }
          return false;
        }))
    } else {
      reject("Array is empty");
    }
  }
  )
}

export function getAllMovies() {
  return new Promise((resolve, reject) => {
    if (data.movies.length > 0) {
        resolve(data.movies);
    } else {
      reject("Array is empty");
    }
  })
}