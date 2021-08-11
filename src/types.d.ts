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
  slug: string
  maturity: string
}

type TFilm = Show & {}
type TSerial = Show & {}

type TFormattedData = {}
type TError = string

type TFooterContent = {
  content: {
    title: string
    phoneNumber: string
    links: string[][]
    copy: string
  }
}
