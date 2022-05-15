import Layout from "app/core/layouts/Layout"
import { BlitzPage, Head, Link, Routes, usePaginatedQuery, useRouter } from "blitz"
import { Card } from "app/core/components"
import { Suspense } from "react"

const PlayPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Play</title>
      </Head>

      <div>
        <p>Please chose a category to start playing</p>

        <Link href={"./play/english"}>
          <a>
            <Card>English </Card>
          </a>
        </Link>
        <Link href={"./play/PHYSICS"}>
          <a>
            <Card>Physics </Card>{" "}
          </a>
        </Link>
        <Link href={"./play/Maths"}>
          <a>
            <Card>Maths </Card>{" "}
          </a>
        </Link>
        <Link href={"./play/biology"}>
          <a>
            <Card>Biology </Card>{" "}
          </a>
        </Link>
      </div>
    </>
  )
}

PlayPage.authenticate = true
PlayPage.getLayout = (page) => <Layout>{page}</Layout>

export default PlayPage
