export const data =
{
  movies: [
    {
      id: 1,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 2,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War 2",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 3,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War 3",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 6,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War 3",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 4,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War 3",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },

    {
      id: 5,
      imageWay: './assets/poster.jpg',
      name: "Avengers: Infinity War 3",
      year: 2020,
      gengre: "Action & Adventure",
      rating: 4.3,
      duration: 154,
      description: "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film's title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue."
    },
  ]
}

export function getAllMovies() {
  return new Promise((resolve, reject) => {
    if (data.movies.length > 0) {
      setTimeout(() => {
        resolve(data.movies);
      }, 5000)
    } else {
      reject("Array is empty");
    }
  })
}

export function getMovieById(id) {
  return new Promise((resolve, reject) => {
    if (data.movies.length > 0) {
      setTimeout(() => {
        resolve(data.movies.find((movie) => {
          if (movie.id === id) {
            return true;
          }
          return false;
        }))
      } , 3000)
    } else {
      reject("Array is empty");
    }
  }
  )
}
