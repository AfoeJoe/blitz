import classnames from "classnames"
import logo from "public/logo.png"
import styles from "./Layout.module.css"
import { BlitzLayout, Head, Image, Link } from "blitz"
import Nav from "../components/Nav/Nav"
import { Suspense } from "react"

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
            <Link href="/">
              <Image src={logo} alt="blitzjs" layout="fixed" width={"100px"} height={"36px"} />
            </Link>
          </div>
        </header>
        <Suspense fallback="Loading...">
          <Nav />
        </Suspense>

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
