import { Typography, TypographyProps } from '@mui/material'
import { Link, LinkProps } from 'react-router-dom'

interface TitleLinkProps {
  to: string
  LinkProps?: LinkProps
  TypographyProps?: TypographyProps
  children: React.ReactNode
}

export const TitleLink = ({ children, to, LinkProps, TypographyProps }: TitleLinkProps) => {
  return (
    <Link {...LinkProps} to={to}>
      <Typography component='h2' variant='h5' {...TypographyProps}>
        {children}
      </Typography>
    </Link>
  )
}
