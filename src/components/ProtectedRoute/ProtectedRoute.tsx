import { ReactChild } from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

type Props = {
  path: string
  children: ReactChild
  alternative: string
  condition: boolean
  exact?: boolean
}

export const ProtectedRoute = ({
  path,
  children,
  alternative,
  condition,
  exact,
}: Props) => {
  return (
    <>
      <Route path={path} exact={!!exact}>
        {condition ? children : <Redirect to={alternative} />}
      </Route>
    </>
  )
}
