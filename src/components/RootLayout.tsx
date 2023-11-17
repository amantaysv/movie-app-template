import { Container, Stack, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <Stack>
      <header></header>
      <SMain>
        <Container>
          <Outlet />
        </Container>
      </SMain>
      <footer></footer>
    </Stack>
  )
}

const SMain = styled('main')({
  flex: '1',
})
