'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession()
  
  return (
    <div className="flex bg-slate-200 p-3 space-x-3 items-center">
      <Link href="/" className="mr-5">
        NextJs
      </Link>

      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          <Link href="/users">Users</Link>
          {session.user!.image && (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <img
                  src={session.user!.image}
                  alt="user image"
                  className="w-10 h-10 rounded-full inline-block ml-2"
                  onClick={() => console.log("User image clicked")}
                />
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
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          )}
          <Link href="/upload" className="ml-3">
            Upload
          </Link>
          <Link href="/api/auth/signout" className="ml-3">
            Logout
          </Link>
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
}

export default NavBar