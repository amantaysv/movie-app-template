import { Button, Typography, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieCard } from '../components/MovieCard'
import { useMovies } from '../hooks/useMovies'
import { IMovie } from '../interface/IMovie'

interface Param {
  category: 'top250movies' | 'komedyi' | 'fantastika'
}

export const Category = () => {
  const { category } = useParams<keyof Param>() as Param

  const params = {
    top250movies: '/collections?type=TOP_250_MOVIES',
    komedyi: '?genres=13',
    fantastika: '?genres=6',
  }

  const titles = {
    top250movies: 'Топ 250 фильмов',
    komedyi: 'Комедии',
    fantastika: 'Фантастика',
  }

  const param = params[category]
  const title = titles[category]

  const [state, setState] = useState<IMovie[]>([])
  console.log('Category ~ state:', state)
  const [meta, setMeta] = useState({
    page: 1,
    total: 0,
    totalPages: 0,
  })

  const isShowLoadMore = meta.page < meta.totalPages

  const onLoadMore = () => {
    setMeta({ ...meta, page: meta.page + 1 })
  }

  const { movies, loading, error } = useMovies(`${param}&page=${meta.page}`)

  useEffect(() => {
    if (!movies) return

    setState([...state, ...movies.items])
    setMeta({
      ...meta,
      total: movies.total,
      totalPages: movies.totalPages,
    })
  }, [JSON.stringify(movies)])

  return (
    <div>
      <STitle variant='h1'>{title}</STitle>
      <Grid container spacing={2} py={4}>
        {state?.map((movie) => (
          <Grid xs={4} sm={4} md={3} lg={2} key={movie.imdbId}>
            <MovieCard {...movie} />
          </Grid>
        ))}
      </Grid>
      {isShowLoadMore && (
        <Button
          variant='outlined'
          fullWidth
          onClick={onLoadMore}
          sx={{
            color: (theme) => theme.palette.common.white,
            borderColor: (theme) => theme.palette.grey[500],
            ':hover': {
              borderColor: (theme) => theme.palette.common.white,
            },
          }}
        >
          Показать еще
        </Button>
      )}
    </div>
  )
}

const STitle = styled(Typography)({
  fontSize: 40,
  marginBottom: 16,
})
