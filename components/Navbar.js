import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Navbar({ name }) {
  const [session, loading] = useSession();
  return (
    <nav className="bg-blue-100 p-2 flex justify-center">
      <ul className="flex">
        <li className="mr-5">Hello, {name}!</li>
        <li className="mr-6">
          {!loading && !session && (
            <Link href="/api/auth/signin">
              <a
                className="text-blue-500 hover:text-blue-800 mr-4"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          )}
          {session && (
            <Link href="/api/auth/signout">
              <a
                className="text-red-500 hover:text-red-800"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Log Out
              </a>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
