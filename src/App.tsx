import { Route, Routes } from 'react-router-dom'
import { RootLayout } from './components/RootLayout'
import { Category } from './pages/Category'
import { Home } from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/catalog/:category' element={<Category />} />
      </Route>
    </Routes>
  )
}

export default App
