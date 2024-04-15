import signOutAction from "@/actions/auth/signOut";
import { auth, signIn, signOut } from "@/auth";

export default async function SingOut() {
  //   const session = await auth();

  return (
    <>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type='submit'>Sign Out</button>
      </form>
      {/* {session === null ? <SingIn /> : <SingOut />} */}
      {/* {session === null ? (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button type='submit'>Sign In</button>
        </form>
      ) : (
        <div className='flex gap-3'>
          <div>{session.user?.name}</div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type='submit'>Sign Out</button>
          </form>
        </div>
      )} */}
    </>
  );
}
