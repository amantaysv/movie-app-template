// Import Swiper React components
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { IMovie } from '../interface/IMovie'
import { MovieCard } from './MovieCard'

interface MovieListSwiperProps {
  movies: IMovie[]
  loading: boolean
  error: null | string
}

export const MovieListSwiper = ({ movies, loading, error }: MovieListSwiperProps) => {
  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      slidesPerGroupSkip={6}
      breakpoints={{
        920: {
          slidesPerView: 5,
          slidesPerGroupSkip: 5,
        },
        1096: {
          slidesPerView: 6,
          slidesPerGroupSkip: 6,
        },
        1272: {
          slidesPerView: 7,
          slidesPerGroupSkip: 7,
        },
      }}
      navigation={true}
      modules={[Navigation]}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.kinopoiskId}>
          <MovieCard {...movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
