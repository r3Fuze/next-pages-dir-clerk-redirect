import { useAuth, useUser } from "@clerk/nextjs"

export default function AuthDisplay() {
  const { isLoaded, isSignedIn, user } = useUser()
  const { signOut } = useAuth()

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  if (!isSignedIn) {
    return (
      <>
        <p>You are not signed in.</p>
        <br />
        <a href="/sign-in">Click here to sign in</a>
      </>
    )
  }

  return (
    <>
      <p>You are signed in as {user.id}</p>
      <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}
