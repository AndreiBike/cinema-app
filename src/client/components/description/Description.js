import React from 'react';
import PropTypes from 'prop-types';
import Head from './head/Head';
import Specification from './specification/Specification';
import Preloader from '@root/client/components/shared/preloader/Preloader';
import {useEffect} from 'react';
import './Description.module.css';

const Description = (props) => {

  const {
    headerLabels,
    searchText,
    movie,
    isLoading,
    uploadIdMovie,
    match,
  } = props;

  useEffect(() => {
    uploadIdMovie({
      id: match.params.id,
      searchBy: 'genres',
      sortBy: 'release_date',
      offset: 0,
    });
  }, [])


  if (isLoading) {
    return (
      <Preloader />
    )
  }

  return (
    <div className="description">
      <Head headerLabels={headerLabels} searchText={searchText} movie = {movie} />
      <Specification movie={movie} />
    </div>
  )
}

Description.propTypes = {
  headerLabels: PropTypes.object,
  searchText: PropTypes.string,
  movie: PropTypes.object,
  isLoading: PropTypes.bool,
  uploadIdMovie: PropTypes.func,
  match: PropTypes.object,
}

export default Description;
