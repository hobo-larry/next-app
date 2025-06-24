import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";
import next from "next";



export async function GET(request:NextRequest, {params}:{params: {id: string }}){
    //fetch data from db
    //if not found, return 404 error
    //else, retunr actuall data
    try {
      const user = await prisma.user.findUnique({
      where: {
        id: parseInt(params.id), // Convert string to integer
      },
    });
    if(!user){
        return NextResponse.json({error: 'user not found'}, {status:404})
    }
    else{
        return NextResponse.json(
            user,
            {status:200})
    }
  
      
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
      
    }
}


export async function PUT(request:NextRequest, {params}:{params: {id: string }}){
  //validate the request body
  //if invalid, return 400
  //fetch the user with the given id
  //if doesnt exist
  // error  404
  //else update user
  //return updated user
  const body =  await request.json()
  const validation = schema.safeParse(body)
  const idUser = parseInt(params.id)
  const userAmout = await prisma.user.count()
  if(!validation.success){
    return NextResponse.json(validation.error.errors, {status:400})
  }
  const uniqueUser = await prisma.user.findUnique({
    where: { id: idUser },
  });

  if (idUser > userAmout)
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });

  if (!uniqueUser)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: uniqueUser.id }, // Ensure id is valid
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}


export async function DELETE(request:NextRequest, {params}:{params: {id: string }}){
   
  
  
  const idUser = parseInt(params.id)
  const userAmout = await prisma.user.count()
  
  const uniqueUser = await prisma.user.findUnique({
    where: { id: idUser },
  });

  if (idUser > userAmout)
    return NextResponse.json({ error: 'invalid id' }, { status: 400 });

  if (!uniqueUser)
    return NextResponse.json({ error: 'user not found' }, { status: 404 });
  else {
    await prisma.user.delete({
      where: { id: uniqueUser.id }, // Ensure id is valid
    });
  }

  

  return NextResponse.json('User deleted!', { status: 200 });
}