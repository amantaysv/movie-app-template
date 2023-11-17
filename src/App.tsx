import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { Home } from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
