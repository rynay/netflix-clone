import { ReactChild } from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

type Props = {
  path: string
  children: ReactChild
  alternative: string
  condition: boolean
}

export const ProtectedRoute = ({
  path,
  children,
  alternative,
  condition,
}: Props) => {
  return (
    <>
      <Route path={path}>
        {condition ? children : <Redirect to={alternative} />}
      </Route>
    </>
  )
}
