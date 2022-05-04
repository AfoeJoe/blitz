import Button from "app/UIComponents/Buttons/Buttons"
import DropDown from "app/UIComponents/DropDown/DropDown"
import Layout from "app/core/layouts/Layout"
import logo from "public/logo.png"
import logout from "app/auth/mutations/logout"
import { BlitzPage, Image, Link, Routes, useMutation } from "blitz"
import { Color, Size } from "app/undecided/tailwindHelpers"
import { Suspense } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.SignupPage()}>
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href={Routes.LoginPage()}>
          <a className="button small">
            <em>Login</em>
          </a>
        </Link>
      </>
    )
  }
}

const Play: BlitzPage = () => {
  return (
    <div className="container">
      <main>pllay</main>

      <style jsx global>{``}</style>
    </div>
  )
}

Play.suppressFirstRenderFlicker = true
Play.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Play
