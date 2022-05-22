import Layout from "app/core/layouts/Layout"
import { BlitzPage, Head, Link } from "blitz"
import { Card } from "app/core/components"
import { Suspense } from "react"
import { UserInfo } from "app/profile/components/UserInfo"

const ProfilePage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <div>
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </div>
    </>
  )
}

ProfilePage.authenticate = true
ProfilePage.getLayout = (page) => <Layout>{page}</Layout>

export default ProfilePage
