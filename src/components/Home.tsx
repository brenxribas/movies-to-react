import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config/config";

// Components

import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";
import TopMovieImage from "./TopMovieImage";
import NoImage from "../assets/img/sem-foto.png";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home: React.FC = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) {
    return <h1>Deu algo errado...</h1>;
  }

  return (
    <React.Fragment>

      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
      
      {!searchTerm && state.results[0] ? (
        <TopMovieImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Grid header={searchTerm ? "Resultado da Pesquisa" : "Filmes Populares"}>
        {state.results.map(movie => (
          <Thumbnail
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieHeight={false}
            movieId={movie.id}
          />
        ))}
      </Grid>

      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Carregar mais filmes</Button>
      )}
    </React.Fragment>
  );
};
export default Home;
