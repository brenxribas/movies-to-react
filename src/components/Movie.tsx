import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_URL, POSTER_SIZE } from '../config/config';
// Components
import BreadCrumb from './BreadCrump';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import Actor from './Actor';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
// Image
import NoImage from '../assets/img/sem-foto.png';

const Movie: React.FC = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Algo deu errado...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />

      <Grid header='Elenco Principal'>
        {movie.actors.map(actor => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageURL={
              actor.profile_path
                ? `${IMAGE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;