type TUser = {
  username: string
  userId: string
  name: string
  photoURL?: string
  photo?: string
  displayName: string
}

type TData = {
  films: TFilm[]
  series: TSerial[]
}

type TFormattedData = {
  films: {
    [key in string]: TFilm[]
  }
  series: {
    [key in string]: TSerial[]
  }
}

type Show = {
  genre: string
  title: string
  description: string
  slug: string
  maturity: string
  id: string
}

type TFilm = Show & {}
type TSerial = Show & {}

type TError = string

type TFooterContent = {
  content: {
    title: string
    phoneNumber: string
    links: string[][]
    copy: string
  }
}
