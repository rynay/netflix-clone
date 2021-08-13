type TUser = {
  username: string | null
  userId: string
  name: string | null
  photoURL?: string | null
  photo?: string | null
  displayName: string | null
  email: string | null
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
    copy?: string
  }
}
