import { useEffect, useState } from 'react'
import { IMovie } from '../interface/IMovie'

const API_KEY = import.meta.env.VITE_API_KEY

export const useMovies = (params: string) => {
  const [movies, setMovies] = useState<null | IMovie[]>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = () => {
    setLoading(true)
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films${params}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.items)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    movies,
    loading,
    error,
  }
}
