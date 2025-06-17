import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";



export function GET(request:NextRequest, {params}:{params: {id: number }}){
    //fetch data from db
    //if not found, return 404 error
    //else, retunr actuall data
    if(params.id > 10){
        return NextResponse.json({error: 'user not found'}, {status:404})
    }
    else{
        return NextResponse.json(
            { id: 1, name: 'Mosh'})
    }
   
}

export async function PUT(request:NextRequest, {params}:{params: {id: number }}){
  //validate the request body
  //if invalid, return 400
  //fetch the user with the given id
  //if doesnt exist
  // error  404
  //else update user
  //return updated user
  const body =  await request.json()
  const validation = schema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.errors, {status:400})
  }
  if(params.id >10 ){
    return NextResponse.json({error:'user not found'}, {status:404})


  }else{
    return NextResponse.json({id:1, name:body.name})
  }
  
}


export async function DELETE(request:NextRequest, {params}:{params: {id: number }}){
   
    if(!params.id){
    return NextResponse.json({error:'invalid id'}, {status:400})
  }
  if(params.id >10 ){
    return NextResponse.json({error:'user not found'}, {status:404})


  }else{
    return NextResponse.json("User deleted")
  }
  
}