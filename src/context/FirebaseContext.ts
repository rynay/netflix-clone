import { createContext } from 'react'
import { firebase } from '../lib/firebase'

export const FirebaseContext = createContext<{
  firebase: typeof firebase
} | null>(null)
