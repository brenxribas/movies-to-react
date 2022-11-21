import React from "react";

// Components
import Thumbnail from "../Thumbnail";

// Config
import { IMAGE_URL, POSTER_SIZE } from "../../config/config";

// Fallback Image
import NoImage from "../../assets/img/sem-foto.png";

// Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

// Types
import { MovieState } from '../../hooks/useMovieFetch';

type Props = {
  movie: MovieState;
}

const MovieInfo: React.FC<Props> = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumbnail
        image={
          movie.poster_path
            ? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        movieHeight={true}
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>

        <div className="rating-directors">
          <div>
            <h3>AVALIAÇÃO</h3>
            <div className="score">{movie.vote_average.toFixed(2)}</div>
          </div>
          <div className="director">
            <h3>DIRETOR{movie.directors.length > 1 ? "ES" : ""}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>

        <h3>RESUMO</h3>
        <p>{movie.overview}</p>


      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
