"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import { Metadata } from "next";

import HeavyComponent from "./components/HeavyComponent";

// Lazy loading components only for large components
// This is useful for performance optimization, especially for components that are heavy or not immediately needed on the initial render.
// import dynamic from "next/dynamic";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent")
// );

export default function Home() {
  // const session = getServerSession(authOptions);
  return (
    <main>
      {/* <h1>Hello {session && <span> {session.user!.name} </span>}</h1>
      <Link href="/users">Go to users</Link>
      <ProductCard /> */}
      {/* <Image src={coffee} alt="coffee Image" width={500} height={300} />{" "} */}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          {
            /* importing lodash inside the button, it will only be laoding once i click thes button */
          }
          // Example of using lodash to sort an array of objects
          const users = [{ name: "C" }, { name: "B" }, { name: "A" }];
          const sortedArr = _.orderBy(users, ["name"]);
          console.log(sortedArr);
        }}
      >
        show
      </button>
    </main>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("..");
//   return {
//     title: "product.title without the quotes ahah, this is an example",
//     description:
//       "product.description without the quotes ahah, this is an example",
//   };
// }
