import { Typography, styled } from '@mui/material'
import { IMovie } from '../interface/IMovie'

// interface MovieCardProps extends IMovie {

// }

export const MovieCard = ({ nameRu, posterUrlPreview }: IMovie) => {
  return (
    <div>
      <div>
        <SImg src={posterUrlPreview} alt='' />
      </div>
      <div>
        <Typography component='h3' variant='subtitle1'>
          {nameRu}
        </Typography>
      </div>
    </div>
  )
}

const SImg = styled('img')({
  maxWidth: '100%',
})
