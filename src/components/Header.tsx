import Link from "next/link";
import pb from "../lib/pocketbase";

export default function Header() {
  return (
    <header>
      <h1>Welcome to Kantan!</h1>
      <ul>
        <li>
          <Link href="/">Home page</Link>
        </li>
        {pb.authStore.isValid ? (
          <li>
            <Link href="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        <li>
          <Link href="/new">Add new</Link>
        </li>
      </ul>
    </header>
  );
}
