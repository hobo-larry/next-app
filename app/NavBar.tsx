'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const {status, data: session} = useSession()
  
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        NextJs
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          {session.user!.image && (
            <img
              src={session.user!.image}
              alt="user image"
              className="w-7 h-7 rounded-full inline-block ml-2"
            />
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