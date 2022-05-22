import classnames from "classnames"
import logout from "app/auth/mutations/logout"
import React from "react"
import styles from "./Nav.module.css"
import { Link, useMutation } from "blitz"
import { useCurrentUser } from "../../hooks/useCurrentUser"

export function Nav() {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <>
      <nav className={classnames(styles.nav, "sticky top-0 w-full")}>
        <ul className="overflow-x-auto flex-nowrap whitespace-nowrap w-screen ">
          <li>
            <Link href="/play">
              <a href="">Play</a>
            </Link>
          </li>

          <li>
            <Link href="/browse">
              <a href="">Browse</a>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <a href="">LeaderBoard</a>
            </Link>
          </li>
          {currentUser ? (
            <>
              {" "}
              <li>
                <Link href="/profile">
                  <a href="">Profile</a>
                </Link>
              </li>
              <li>
                <button
                  className="button small"
                  onClick={async () => {
                    await logoutMutation()
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link href="/login">
                  <a href="">Login</a>
                </Link>
              </li>
              <li>
                <Link href="/signup">
                  <a href="">Signup</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}
export default Nav
