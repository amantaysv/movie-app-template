import { ArrowForwardIos } from '@mui/icons-material'
import { Typography, TypographyProps, styled } from '@mui/material'
import { Link, LinkProps } from 'react-router-dom'

interface TitleLinkProps {
  to: string
  LinkProps?: LinkProps
  TypographyProps?: TypographyProps
  children: React.ReactNode
}

export const TitleLink = ({ children, to, LinkProps, TypographyProps }: TitleLinkProps) => {
  return (
    <SLink {...LinkProps} to={to}>
      <Typography component='h2' variant='h5' {...TypographyProps}>
        {children}
      </Typography>
      <ArrowForwardIos fontSize='small' />
    </SLink>
  )
}

const SLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#fff',
  marginBottom: 24,
  '&:hover': {
    color: '#fff',
  },
})
