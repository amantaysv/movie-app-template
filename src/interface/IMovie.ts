export interface IMovie {
  kinopoiskId: number
  imdbId: number
  nameRu: string
  nameEn: null
  nameOriginal: string
  countries: [
    {
      country: string
    }
  ]
  genres: [
    {
      genre: string
    },
    {
      genre: string
    },
    {
      genre: string
    }
  ]
  ratingKinopoisk: number
  ratingImdb: number
  year: number
  type: string
  posterUrl: string
  posterUrlPreview: string
}
