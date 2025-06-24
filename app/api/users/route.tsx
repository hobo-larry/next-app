import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request:NextRequest){
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }

}

export async function POST(request:NextRequest){
  
  const body = await request.json()
  const validation = schema.safeParse(body)
  const user = await prisma.user.findUnique({
    where: { email: body.email
    }})
    if(user){
      return NextResponse.json({error: "User already exists"}, {status: 400})
    }
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
    
  if(!validation.success){
    return NextResponse.json(validation.error.errors, {status:400})
  }
  return NextResponse.json(newUser,{status:201})
}
