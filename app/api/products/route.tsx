import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";




export async function GET(request:NextRequest){
  try {
    const users = await prisma.products.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }

}
export async function POST(request:NextRequest){
  
  const body = await request.json()
  const validation = schema.safeParse(body)
  const product = await prisma.products.findFirst({
    where: { name: body.name
    }})
    if(product){
      return NextResponse.json({error: "Product already exists"}, {status: 400})
    }
  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
    
  if(!validation.success){
    return NextResponse.json(validation.error.errors, {status:400})
  }
  return NextResponse.json(newProduct,{status:201})
}
