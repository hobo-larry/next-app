import { NextRequest, NextResponse } from "next/server";



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