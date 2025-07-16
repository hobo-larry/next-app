import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";
import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span> {session.user!.name} </span>}</h1>
      <Link href="/users">Go to users</Link>
      <ProductCard />
      <Image src={coffee} alt="coffee Image" width={500} height={300} />{" "}
      {/* this is how to use local images in next.js  it already compresses the image*/}
      <Image
        src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg/"
        alt="coffee Image"
        width={500}
        height={300}
      />{" "}
      {/* this is how to use remote images in next.js for this to work u need to register it in the next config file*/}
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("..");
  return {
    title: "product.title without the quotes ahah, this is an example",
    description:
      "product.description without the quotes ahah, this is an example",
  };
}
