'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  const { status, data: session } = useSession();
  console.log("Session image URL:", session?.user?.image);

  return (
    <div className="flex bg-slate-200 p-3 space-x-3 items-center">
      <Link href="/" className="mr-5">
        NextJs
      </Link>

      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {(session.user!.image || session.user!.name) && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                {session.user!.image ? (
                  <img
                    src={session.user!.image}
                    alt="user image"
                    className="w-9 h-9 rounded-full inline-block ml-2"
                  />
                ) : (
                  <span>{session.user!.name?.toLocaleUpperCase()}</span>
                )}
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/upload">Upload</Link>
                </li>
                <li>
                  <Link href="/users">Users</Link>
                </li>
                <li>
                  <Link href="/api/auth/signout">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {status === "unauthenticated" && (
        <div>
          <Link href="/api/auth/signin" className="ml-3">
            Sign In
          </Link>
          <Link href="/signup" className="ml-3">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar