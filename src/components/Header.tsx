import { cookies } from "next/headers";
import Link from "next/link";

export default function Header() {
  const cookie = cookies().get("pb_auth");

  return (
    <header>
      <h1>Welcome to Kantan!</h1>
      <ul>
        <li>
          <Link href="/">Home page</Link>
        </li>
        {cookie ? (
          <>
            <li>
              <Link href="/app/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/app/new">Add new</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
