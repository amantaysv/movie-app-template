import { MovieListSwiper } from '../components/MovieListSwiper'
import { TitleLink } from '../components/TitleLink'
import { useMovies } from '../hooks/useMovies'

export const Home = () => {
  const { movies: top250movies, loading, error } = useMovies('/collections?type=TOP_250_MOVIES')

  return (
    <div>
      <TitleLink to='/collections/top250movies'>Топ 250 фильмов</TitleLink>
      {/* {top250movies?.map((movie) => (
        <MovieCard key={movie.kinopoiskId} {...movie} />
      ))} */}

      {top250movies && <MovieListSwiper movies={top250movies} loading={loading} error={error} />}
    </div>
  )
}
