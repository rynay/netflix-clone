type TUser = {
  username: string
  userId: string
  name: string
  photo: string
}

type TData = {
  films: TFilm[]
  series: TSerial[]
}

type Show = {
  genre: string
  title: string
  description: string
}

type TFilm = Show
type TSerial = Show

type TFormattedData = {}
type TError = {}
