import classnames from "classnames"
import logo from "public/logo.png"
import styles from "./Layout.module.css"
import { BlitzLayout, Head, Image, Link } from "blitz"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "blitzApp"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classnames(styles.wrapper, "h-screen")}>
        <header className={classnames(styles.header, "h-9 text-center")}>
          <div className="logo cursor-pointer">
            <Link href="./">
              <Image src={logo} alt="blitzjs" layout="fixed" width={"100px"} height={"36px"} />
            </Link>
          </div>
        </header>
        <nav className={classnames(styles.nav, "sticky top-0 w-full")}>
          <ul className="overflow-x-auto flex-nowrap whitespace-nowrap w-screen ">
            <li>
              <Link href="./play">
                <a href="">Play</a>
              </Link>
            </li>

            <li>
              <Link href="./browse">
                <a href="">Browse</a>
              </Link>
            </li>
            <li>
              <Link href="./leaderboard">
                <a href="">LeaderBoard</a>
              </Link>
            </li>
            <li>
              <Link href="./profile">
                <a href="">Profile</a>
              </Link>
            </li>
            <li>
              <Link href="./">
                <a href="">Logout</a>
              </Link>
            </li>
          </ul>
        </nav>
        <section role="main" className={styles.content}>
          {children}
        </section>

        <aside className={styles.side}>
          Leader board. <br />
          Coming soon...
        </aside>
        <div className={styles.ad}>
          Online players. <br />
          Coming soon...
        </div>
        <footer
          className={classnames(styles.footer, "text-center m-auto w-screen h-9 bg-slate-300")}
        >
          The footer Quiz Website
        </footer>
      </div>
    </>
  )
}

export default Layout
