import { MovieListSwiper } from '../components/MovieListSwiper'
import { TitleLink } from '../components/TitleLink'
import { useMovies } from '../hooks/useMovies'

export const Home = () => {
  const {
    movies: top250movies,
    loading: top250loading,
    error: top250error,
  } = useMovies('/collections?type=TOP_250_MOVIES')
  const {
    movies: comedyMovies,
    loading: comedyLoading,
    error: comedyError,
  } = useMovies('?genres=13')
  const {
    movies: fantasticMovies,
    loading: fantasticLoading,
    error: fantasticError,
  } = useMovies('?genres=6')

  return (
    <div>
      <div>
        <TitleLink to='/catalog/top250movies'>Топ 250 фильмов</TitleLink>
        {top250movies && (
          <MovieListSwiper
            movies={top250movies.items}
            loading={top250loading}
            error={top250error}
          />
        )}
      </div>
      <div>
        <TitleLink to='/catalog/komedyi'>Комедии</TitleLink>
        {comedyMovies && (
          <MovieListSwiper
            movies={comedyMovies.items}
            loading={comedyLoading}
            error={comedyError}
          />
        )}
      </div>
      <div>
        <TitleLink to='/catalog/fantastika'>Фантастика</TitleLink>
        {fantasticMovies && (
          <MovieListSwiper
            movies={fantasticMovies.items}
            loading={fantasticLoading}
            error={fantasticError}
          />
        )}
      </div>
    </div>
  )
}
