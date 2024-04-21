import signOutAction from "@/actions/auth/signOut";

export default function SingOut() {
  return (
    <>
      <form action={signOutAction}>
        <button type='submit'>Sign Out</button>
      </form>
    </>
  );
}
