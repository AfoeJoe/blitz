import { useCurrentUser } from "app/core/hooks/useCurrentUser"

export const UserInfo = () => {
  const currentUser = useCurrentUser()

  if (currentUser) {
    return (
      <div>
        User id: <code>{currentUser.id}</code>
        <br />
        User role: <code>{currentUser.role}</code>
      </div>
    )
  } else {
    return <></>
  }
}
